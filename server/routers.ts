import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { sendFormEmail } from "./email";
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
        const subject = `New Booking Request: ${input.tentName} (${input.tentSize})`;
        const html = `
          <h2>New Booking Request</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Tent</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.tentName} &mdash; ${input.tentSize} &mdash; ${input.tentPrice}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Customer</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.phone}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${input.email}">${input.email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Event Date</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.date}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Delivery Address</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.address}</td></tr>
            ${input.notes ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Notes</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.notes}</td></tr>` : ""}
          </table>
        `;

        const notifContent = `Tent: ${input.tentName} - ${input.tentSize} - ${input.tentPrice}\nCustomer: ${input.name}\nPhone: ${input.phone}\nEmail: ${input.email}\nDate: ${input.date}\nAddress: ${input.address}${input.notes ? "\nNotes: " + input.notes : ""}`;

        const [emailSent, notifSent] = await Promise.all([
          sendFormEmail({ subject, html }),
          notifyOwner({ title: subject, content: notifContent }),
        ]);

        if (!emailSent && !notifSent) {
          throw new Error("Failed to send notification. Please try again or call us directly.");
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
        const subject = `New Quote Request from ${input.name}`;
        const html = `
          <h2>New Quote Request</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Customer</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.phone}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${input.email}">${input.email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Event Date</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.date}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Guest Count</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.guests}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Venue/Address</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.address}</td></tr>
            ${input.tentType ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Tent Interest</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.tentType}</td></tr>` : ""}
            ${input.surfaceType ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Surface Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.surfaceType}</td></tr>` : ""}
            ${input.details ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Additional Details</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.details}</td></tr>` : ""}
          </table>
        `;

        const notifContent = `Customer: ${input.name}\nPhone: ${input.phone}\nEmail: ${input.email}\nDate: ${input.date}\nGuests: ${input.guests}\nAddress: ${input.address}${input.tentType ? "\nTent: " + input.tentType : ""}${input.surfaceType ? "\nSurface: " + input.surfaceType : ""}${input.details ? "\nDetails: " + input.details : ""}`;

        const [emailSent, notifSent] = await Promise.all([
          sendFormEmail({ subject, html }),
          notifyOwner({ title: subject, content: notifContent }),
        ]);

        if (!emailSent && !notifSent) {
          throw new Error("Failed to send notification. Please try again or call us directly.");
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
        const subject = `Contact Form: ${input.subject}`;
        const html = `
          <h2>New Contact Message</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">From</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.name}</td></tr>
            ${input.phone ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.phone}</td></tr>` : ""}
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${input.email}">${input.email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Subject</td><td style="padding:8px;border-bottom:1px solid #eee;">${input.subject}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f9f9f9;border-radius:4px;">
            <strong>Message:</strong><br/><br/>
            ${input.message.replace(/\n/g, "<br/>")}
          </div>
        `;

        const notifContent = `From: ${input.name}\n${input.phone ? "Phone: " + input.phone + "\n" : ""}Email: ${input.email}\nSubject: ${input.subject}\n\nMessage:\n${input.message}`;

        const [emailSent, notifSent] = await Promise.all([
          sendFormEmail({ subject, html }),
          notifyOwner({ title: subject, content: notifContent }),
        ]);

        if (!emailSent && !notifSent) {
          throw new Error("Failed to send notification. Please try again or call us directly.");
        }
        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
