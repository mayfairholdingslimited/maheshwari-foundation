import type { APIRoute } from "astro";
import { getCounter, setCounter, sanitizeCounter } from "../../lib/counterStore";
import { COOKIE_NAME, verifyCookie } from "../../lib/adminAuth";

export const prerender = false;

// Public: current counter values (consumed by the homepage counter widget).
export const GET: APIRoute = async () => {
  const counter = await getCounter();
  return new Response(JSON.stringify(counter), {
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
    },
  });
};

// Admin-only: save new counter values. Posted by the /admin edit form.
export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  if (!verifyCookie(cookies.get(COOKIE_NAME)?.value)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const form = await request.formData();
  const data = sanitizeCounter(Object.fromEntries(form.entries()));

  try {
    await setCounter(data);
  } catch {
    return redirect("/admin?error=storage", 303);
  }
  return redirect("/admin?saved=1", 303);
};
