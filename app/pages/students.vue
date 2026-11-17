<script setup>
const students = [
  { name: 'Finn the Human', studentId: '241-01407', year: '3rd Year', program: 'BS Information Technology', description: 'Web developer who enjoys building clean and simple interfaces.', email: 'finnthe.human@gmail.com', phone: '0912 345 6789', status: 'Enrolled', cover: 'bg-pill-blue' },
  { name: 'Simon Petrikov', studentId: '241-02218', year: '2nd Year', program: 'BS Computer Science', description: 'Loves algorithms, databases, and solving tricky problems.', email: 'iceking@gmail.com', phone: '0923 456 7890', status: 'Graduated', cover: 'bg-pill-lime' },
  { name: 'Jake the Dog', studentId: '231-00873', year: '4th Year', program: 'BS Information Systems', description: 'Turns ideas into useful apps with a focus on usability.', email: 'jakeda.dog@gmail.com', phone: '0934 567 8901', status: 'Enrolled', cover: 'bg-pill-orange' },
  { name: 'Marceline the Vampire Queen', studentId: '251-00342', year: '1st Year', program: 'BS Information Technology', description: 'Curious beginner who loves design and creative coding.', email: 'guitar.vamps@gmail.com', phone: '0945 678 9012', status: 'Dropped', cover: 'bg-pill-purple' },
  { name: 'Lumpy Space Princess ', studentId: '241-01925', year: '3rd Year', program: 'BS Computer Science', description: 'Tinkers with microcontrollers and loves building gadgets.', email: 'purpleyam@gmail.com', phone: '0956 789 0123', status: 'On Leave', cover: 'bg-pill-yellow' },
  { name: 'Princess Bubblegum', studentId: '241-03056', year: '2nd Year', program: 'BS Information Technology', description: 'Aspiring UI/UX designer who sketches ideas before coding.', email: 'bonnibelbubblegums@gmail.com', phone: '0967 890 1234', status: 'Enrolled', cover: 'bg-pill-pink' },
]
</script>

<template>
  <div class="mb-12 text-center">
    <h1 class="font-serif text-6xl leading-[0.95] tracking-[-0.03em] sm:text-7xl">
      Meet the <em>students</em>
    </h1>
    <p class="mt-3 text-[16px] text-muted">Scroll through and get to know them better.</p>
  </div>

  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <StudentCard v-for="s in students" :key="s.studentId" v-bind="s" />
  </div>

  <div class="mt-14 text-center">
    <AppButton label="Back to home" color="yellow" to="/" />
  </div>
</template>