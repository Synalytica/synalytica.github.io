const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LandingPage.vue") },
      { path: "team", component: () => import("pages/TeamPage.vue") },
      { path: "board", component: () => import("pages/BoardPage.vue") },
      { path: "contact", component: () => import("pages/ContactPage.vue") },
      // { path: 'offerings', component: () => import('pages/OfferingsPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
