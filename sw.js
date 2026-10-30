/* Heavy Gym en la web: funciona sin internet después de la primera visita.
   La página abre desde la copia guardada y se actualiza por detrás con la red (la versión nueva sale al volver a abrirla).
   Fuentes, íconos e imágenes de los ejercicios también salen de la copia guardada. */
const VERSION = "hg-1a540903d1";
const BASE = ["./", "index.html", "manifest.webmanifest", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "fonts/lato-latin-400-normal.woff2", "fonts/lato-latin-700-normal.woff2", "fonts/lato-latin-900-normal.woff2", "fonts/poppins-latin-500-normal.woff2", "fonts/poppins-latin-600-normal.woff2", "fonts/poppins-latin-700-normal.woff2", "fonts/poppins-latin-800-normal.woff2"];
const IMAGENES = ["img/ej/Ab_Crunch_Machine.jpg", "img/ej/Air_Bike.jpg", "img/ej/Arnold_Dumbbell_Press.jpg", "img/ej/Ball_Leg_Curl.jpg", "img/ej/Barbell_Ab_Rollout_-_On_Knees.jpg", "img/ej/Barbell_Bench_Press_-_Medium_Grip.jpg", "img/ej/Barbell_Curl.jpg", "img/ej/Barbell_Deadlift.jpg", "img/ej/Barbell_Glute_Bridge.jpg", "img/ej/Barbell_Hip_Thrust.jpg", "img/ej/Barbell_Incline_Bench_Press_-_Medium_Grip.jpg", "img/ej/Barbell_Lunge.jpg", "img/ej/Barbell_Shrug.jpg", "img/ej/Barbell_Shrug_Behind_The_Back.jpg", "img/ej/Barbell_Squat.jpg", "img/ej/Barbell_Walking_Lunge.jpg", "img/ej/Bench_Dips.jpg", "img/ej/Bent_Over_Barbell_Row.jpg", "img/ej/Bent_Over_Two-Arm_Long_Bar_Row.jpg", "img/ej/Bicycling_Stationary.jpg", "img/ej/Butterfly.jpg", "img/ej/Cable_Crossover.jpg", "img/ej/Cable_Crunch.jpg", "img/ej/Cable_Hammer_Curls_-_Rope_Attachment.jpg", "img/ej/Cable_Hip_Adduction.jpg", "img/ej/Cable_Internal_Rotation.jpg", "img/ej/Cable_Rear_Delt_Fly.jpg", "img/ej/Cable_Rope_Overhead_Triceps_Extension.jpg", "img/ej/Cable_Shrugs.jpg", "img/ej/Calf_Press_On_The_Leg_Press_Machine.jpg", "img/ej/Chin-Up.jpg", "img/ej/Close-Grip_Barbell_Bench_Press.jpg", "img/ej/Close-Grip_Front_Lat_Pulldown.jpg", "img/ej/Concentration_Curls.jpg", "img/ej/Crunches.jpg", "img/ej/Dead_Bug.jpg", "img/ej/Decline_Barbell_Bench_Press.jpg", "img/ej/Decline_Crunch.jpg", "img/ej/Decline_Dumbbell_Bench_Press.jpg", "img/ej/Dip_Machine.jpg", "img/ej/Dips_-_Chest_Version.jpg", "img/ej/Dips_-_Triceps_Version.jpg", "img/ej/Donkey_Calf_Raises.jpg", "img/ej/Dumbbell_Alternate_Bicep_Curl.jpg", "img/ej/Dumbbell_Bench_Press.jpg", "img/ej/Dumbbell_Bicep_Curl.jpg", "img/ej/Dumbbell_Flyes.jpg", "img/ej/Dumbbell_Incline_Row.jpg", "img/ej/Dumbbell_Lunges.jpg", "img/ej/Dumbbell_Shoulder_Press.jpg", "img/ej/Dumbbell_Shrug.jpg", "img/ej/Dumbbell_Side_Bend.jpg", "img/ej/Dumbbell_Step_Ups.jpg", "img/ej/EZ-Bar_Curl.jpg", "img/ej/EZ-Bar_Skullcrusher.jpg", "img/ej/Elliptical_Trainer.jpg", "img/ej/External_Rotation.jpg", "img/ej/External_Rotation_with_Cable.jpg", "img/ej/Face_Pull.jpg", "img/ej/Farmers_Walk.jpg", "img/ej/Flat_Bench_Lying_Leg_Raise.jpg", "img/ej/Floor_Glute-Ham_Raise.jpg", "img/ej/Front_Barbell_Squat.jpg", "img/ej/Front_Cable_Raise.jpg", "img/ej/Front_Dumbbell_Raise.jpg", "img/ej/Glute_Ham_Raise.jpg", "img/ej/Goblet_Squat.jpg", "img/ej/Good_Morning.jpg", "img/ej/Hack_Squat.jpg", "img/ej/Hammer_Curls.jpg", "img/ej/Hanging_Leg_Raise.jpg", "img/ej/High_Cable_Curls.jpg", "img/ej/Hip_Flexion_with_Band.jpg", "img/ej/Hyperextensions_Back_Extensions.jpg", "img/ej/Incline_Dumbbell_Curl.jpg", "img/ej/Incline_Dumbbell_Flyes.jpg", "img/ej/Incline_Dumbbell_Press.jpg", "img/ej/Jackknife_Sit-Up.jpg", "img/ej/Jogging_Treadmill.jpg", "img/ej/Knee_Hip_Raise_On_Parallel_Bars.jpg", "img/ej/Leg_Extensions.jpg", "img/ej/Leg_Press.jpg", "img/ej/Leverage_Chest_Press.jpg", "img/ej/Leverage_Decline_Chest_Press.jpg", "img/ej/Leverage_Incline_Chest_Press.jpg", "img/ej/Leverage_Iso_Row.jpg", "img/ej/Leverage_Shoulder_Press.jpg", "img/ej/Leverage_Shrug.jpg", "img/ej/Low_Cable_Crossover.jpg", "img/ej/Lying_Leg_Curls.jpg", "img/ej/Lying_T-Bar_Row.jpg", "img/ej/Machine_Bench_Press.jpg", "img/ej/Machine_Bicep_Curl.jpg", "img/ej/Machine_Preacher_Curls.jpg", "img/ej/Machine_Shoulder_Military_Press.jpg", "img/ej/Machine_Triceps_Extension.jpg", "img/ej/Monster_Walk.jpg", "img/ej/One-Arm_Dumbbell_Row.jpg", "img/ej/One-Legged_Cable_Kickback.jpg", "img/ej/One_Arm_Lat_Pulldown.jpg", "img/ej/Pallof_Press.jpg", "img/ej/Palms-Down_Dumbbell_Wrist_Curl_Over_A_Bench.jpg", "img/ej/Palms-Down_Wrist_Curl_Over_A_Bench.jpg", "img/ej/Palms-Up_Barbell_Wrist_Curl_Over_A_Bench.jpg", "img/ej/Plank.jpg", "img/ej/Plate_Pinch.jpg", "img/ej/Plie_Dumbbell_Squat.jpg", "img/ej/Preacher_Curl.jpg", "img/ej/Pull_Through.jpg", "img/ej/Pullups.jpg", "img/ej/Push-Ups_-_Close_Triceps_Position.jpg", "img/ej/Pushups.jpg", "img/ej/Rack_Pulls.jpg", "img/ej/Recumbent_Bike.jpg", "img/ej/Reverse_Barbell_Curl.jpg", "img/ej/Reverse_Grip_Bent-Over_Rows.jpg", "img/ej/Reverse_Grip_Triceps_Pushdown.jpg", "img/ej/Reverse_Machine_Flyes.jpg", "img/ej/Romanian_Deadlift.jpg", "img/ej/Rowing_Stationary.jpg", "img/ej/Running_Treadmill.jpg", "img/ej/Russian_Twist.jpg", "img/ej/Seated_Barbell_Military_Press.jpg", "img/ej/Seated_Bent-Over_Rear_Delt_Raise.jpg", "img/ej/Seated_Cable_Rows.jpg", "img/ej/Seated_Calf_Raise.jpg", "img/ej/Seated_Leg_Curl.jpg", "img/ej/Seated_One-arm_Cable_Pulley_Rows.jpg", "img/ej/Seated_Side_Lateral_Raise.jpg", "img/ej/Side_Lateral_Raise.jpg", "img/ej/Smith_Machine_Behind_the_Back_Shrug.jpg", "img/ej/Smith_Machine_Bench_Press.jpg", "img/ej/Smith_Machine_Bent_Over_Row.jpg", "img/ej/Smith_Machine_Calf_Raise.jpg", "img/ej/Smith_Machine_Close-Grip_Bench_Press.jpg", "img/ej/Smith_Machine_Decline_Press.jpg", "img/ej/Smith_Machine_Incline_Bench_Press.jpg", "img/ej/Smith_Machine_Overhead_Shoulder_Press.jpg", "img/ej/Smith_Machine_Squat.jpg", "img/ej/Smith_Machine_Stiff-Legged_Deadlift.jpg", "img/ej/Smith_Single-Leg_Split_Squat.jpg", "img/ej/Spider_Curl.jpg", "img/ej/Split_Squat_with_Dumbbells.jpg", "img/ej/Stairmaster.jpg", "img/ej/Standing_Biceps_Cable_Curl.jpg", "img/ej/Standing_Cable_Wood_Chop.jpg", "img/ej/Standing_Calf_Raises.jpg", "img/ej/Standing_Dumbbell_Calf_Raise.jpg", "img/ej/Standing_Dumbbell_Triceps_Extension.jpg", "img/ej/Standing_Leg_Curl.jpg", "img/ej/Standing_Low-Pulley_Deltoid_Raise.jpg", "img/ej/Standing_Military_Press.jpg", "img/ej/Standing_Palms-Up_Barbell_Behind_The_Back_Wrist_Curl.jpg", "img/ej/Stiff-Legged_Barbell_Deadlift.jpg", "img/ej/Stomach_Vacuum.jpg", "img/ej/Straight-Arm_Dumbbell_Pullover.jpg", "img/ej/Straight-Arm_Pulldown.jpg", "img/ej/Sumo_Deadlift.jpg", "img/ej/Superman.jpg", "img/ej/Thigh_Abductor.jpg", "img/ej/Thigh_Adductor.jpg", "img/ej/Tricep_Dumbbell_Kickback.jpg", "img/ej/Triceps_Pushdown.jpg", "img/ej/Triceps_Pushdown_-_Rope_Attachment.jpg", "img/ej/Triceps_Pushdown_-_V-Bar_Attachment.jpg", "img/ej/Underhand_Cable_Pulldowns.jpg", "img/ej/Upright_Barbell_Row.jpg", "img/ej/V-Bar_Pulldown.jpg", "img/ej/V-Bar_Pullup.jpg", "img/ej/Walking_Treadmill.jpg", "img/ej/Weighted_Sissy_Squat.jpg", "img/ej/Wide-Grip_Lat_Pulldown.jpg", "img/ej/Wrist_Roller.jpg"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(BASE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION) await caches.delete(k);
    await self.clients.claim();
    // Las animaciones de los ejercicios se guardan poco a poco para tenerlas en el gym aunque no haya señal
    const c = await caches.open(VERSION);
    for (const u of IMAGENES) {
      try { if (!(await c.match(u))) await c.add(u); } catch (err) { /* se intenta en la próxima visita */ }
    }
  })());
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === "navigate") {
    // Abre al instante con la copia guardada (en el gym la señal puede tardar) y la actualiza por detrás:
    // la versión nueva aparece la siguiente vez que abras la app
    const red = fetch(req, { cache: "no-store" }).then(async (r) => {
      if (r.ok) await (await caches.open(VERSION)).put("index.html", r.clone());
      return r;
    });
    e.waitUntil(red.catch(() => {}));
    e.respondWith((async () => (await caches.match("index.html")) || red)());
    return;
  }
  e.respondWith((async () => {
    const hit = await caches.match(req, { ignoreSearch: true });
    if (hit) return hit;
    const r = await fetch(req);
    if (r.ok) (await caches.open(VERSION)).put(req, r.clone());
    return r;
  })());
});
