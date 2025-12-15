import Stripe from "stripe";

// Create a single Stripe instance for server-side usage
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
