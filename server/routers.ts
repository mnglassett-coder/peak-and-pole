import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  forms: router({
    /** Small tent booking request */
    submitBooking: publicProcedure
      .input(
        z.object({
          tentName: z.string(),
          tentSize: z.string(),
          tentPrice: z.string(),
          name: z.string().min(1),
          phone: z.string().min(1),
          email: z.string().email(),
          date: z.string().min(1),
          address: z.string().min(1),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const title = `🎪 New Booking Request: ${input.tentName} (${input.tentSize})`;
        const content = [
          `**Tent:** ${input.tentName} — ${input.tentSize} — ${input.tentPrice}`,
          `**Customer:** ${input.name}`,
          `**Phone:** ${input.phone}`,
          `**Email:** ${input.email}`,
          `**Event Date:** ${input.date}`,
          `**Delivery Address:** ${input.address}`,
          input.notes ? `**Notes:** ${input.notes}` : "",
        ]
          .filter(Boolean)
          .join("\n");

        const sent = await notifyOwner({ title, content });
        if (!sent) {
          throw new Error("Failed to send notification. Please try again.");
        }
        return { success: true } as const;
      }),

    /** Large tent quote request */
    submitQuote: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          phone: z.string().min(1),
          email: z.string().email(),
          date: z.string().min(1),
          guests: z.string().min(1),
          address: z.string().min(1),
          tentType: z.string().optional(),
          surfaceType: z.string().optional(),
          details: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const title = `📋 New Quote Request from ${input.name}`;
        const content = [
          `**Customer:** ${input.name}`,
          `**Phone:** ${input.phone}`,
          `**Email:** ${input.email}`,
          `**Event Date:** ${input.date}`,
          `**Guest Count:** ${input.guests}`,
          `**Venue/Address:** ${input.address}`,
          input.tentType ? `**Tent Interest:** ${input.tentType}` : "",
          input.surfaceType ? `**Surface Type:** ${input.surfaceType}` : "",
          input.details ? `**Additional Details:** ${input.details}` : "",
        ]
          .filter(Boolean)
          .join("\n");

        const sent = await notifyOwner({ title, content });
        if (!sent) {
          throw new Error("Failed to send notification. Please try again.");
        }
        return { success: true } as const;
      }),

    /** General contact form */
    submitContact: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          phone: z.string().optional(),
          email: z.string().email(),
          subject: z.string().min(1),
          message: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        const title = `✉️ Contact Form: ${input.subject}`;
        const content = [
          `**From:** ${input.name}`,
          input.phone ? `**Phone:** ${input.phone}` : "",
          `**Email:** ${input.email}`,
          `**Subject:** ${input.subject}`,
          `\n**Message:**\n${input.message}`,
        ]
          .filter(Boolean)
          .join("\n");

        const sent = await notifyOwner({ title, content });
        if (!sent) {
          throw new Error("Failed to send notification. Please try again.");
        }
        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
