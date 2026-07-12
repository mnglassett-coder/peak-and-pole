import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("forms.submitBooking", () => {
  it("accepts a valid booking request and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.forms.submitBooking({
      tentName: "Pop-Up Canopy",
      tentSize: "10' × 10'",
      tentPrice: "$75",
      name: "John Doe",
      phone: "985-555-1234",
      email: "john@example.com",
      date: "2026-08-15",
      address: "123 Main St, Covington, LA 70433",
      notes: "Need it near the pool",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.forms.submitBooking({
        tentName: "Pop-Up Canopy",
        tentSize: "10' × 10'",
        tentPrice: "$75",
        name: "John Doe",
        phone: "985-555-1234",
        email: "not-an-email",
        date: "2026-08-15",
        address: "123 Main St",
      })
    ).rejects.toThrow();
  });
});

describe("forms.submitQuote", () => {
  it("accepts a valid quote request and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.forms.submitQuote({
      name: "Jane Smith",
      phone: "985-555-5678",
      email: "jane@example.com",
      date: "2026-09-20",
      guests: "150",
      address: "456 Oak Ave, Mandeville, LA 70471",
      tentType: "peaked-40x60",
      surfaceType: "grass",
      details: "Need lighting too",
    });

    expect(result).toEqual({ success: true });
  });
});

describe("forms.submitContact", () => {
  it("accepts a valid contact message and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.forms.submitContact({
      name: "Bob Wilson",
      phone: "985-555-9999",
      email: "bob@example.com",
      subject: "Question about availability",
      message: "Do you have anything available for July 4th weekend?",
    });

    expect(result).toEqual({ success: true });
  });

  it("works without optional phone", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.forms.submitContact({
      name: "Alice",
      email: "alice@example.com",
      subject: "Pricing question",
      message: "What's the cost for a 20x20?",
    });

    expect(result).toEqual({ success: true });
  });
});
