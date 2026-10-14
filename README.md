- Track Orders
- User Profile
- Admin Site
- Implement DexieJS

"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ROUTES = ["/collection/dresses", "/collection/tops", "/display"]; // your real main routes

export default function PrefetchRoutes() {
  const router = useRouter();

  useEffect(() => {
    ROUTES.forEach((route) => router.prefetch(route));
  }, [router]);

  return null;
}