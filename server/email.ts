import { Resend } from "resend";

const FROM_EMAIL = "Peak & Pole Tent Co. <notifications@peakandpole.com>";
const TO_EMAIL = "events@itsthejumpoff.com";

let _resend: Resend | null = null;

function getResend(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

export interface EmailPayload {
  subject: string;
  html: string;
}

/**
 * Send a form notification email via Resend.
 * Falls back gracefully if the API key is not configured.
 */
export async function sendFormEmail(payload: EmailPayload): Promise<boolean> {
  const resend = getResend();
  if (!resend) {
    console.warn("[Email] RESEND_API_KEY not configured, skipping email send");
    return false;
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: payload.subject,
      html: payload.html,
    });

    if (error) {
      console.error("[Email] Resend error:", error);
      return false;
    }

    return true;
  } catch (err) {
    console.error("[Email] Failed to send:", err);
    return false;
  }
}
