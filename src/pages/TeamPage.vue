<template>
  <q-page padding>
    <div class="row q-mb-xl items-center justify-center text-center">
      <div class="col">
        <h3 class="text-h3">
          <q-icon name="mdi-crowd" size="lg" left />
          Meet the Team
        </h3>
      </div>
    </div>
    <div class="row flex-center q-mb-xl">
      <!-- founders -->
      <div class="col-xs-12 col-md-auto q-mr-lg">
        <q-card flat bordered class="founding-member">
          <q-img src="team/mahesh.png">
            <div class="absolute-bottom text-left name-header">
              <div class="text-h6">Mahesh S</div>
              <div class="text-overline text-uppercase">Founder</div>
            </div>
          </q-img>
          <q-card-actions class="text-right text-uppercase text-overline">
            <span class="text-body2">Visionary Vortex</span>
            <q-space />
            <q-btn flat icon="mdi-linkedin" />
            <q-btn flat icon="mdi-email" />
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-auto q-ml-lg">
        <q-card flat bordered class="founding-member">
          <q-img src="team/pratik.png">
            <div class="absolute-bottom text-left name-header">
              <div class="text-h6">Pratik K</div>
              <div class="text-overline text-uppercase">Founder</div>
            </div>
          </q-img>
          <q-card-actions class="text-right text-uppercase text-overline">
            <span class="text-body2">Tech Shaman</span>
            <q-space />
            <q-btn flat icon="mdi-linkedin" />
            <q-btn flat icon="mdi-github" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div class="row flex-center q-mb-lg">
      <!-- core team -->
      <div class="col-xs-12 col-md-auto q-mr-lg">
        <q-card flat bordered class="core-member">
          <q-img src="team/sanjay.png">
            <div class="absolute-bottom text-right name-header">
              <div class="text-h6">Sanjay K</div>
              <div class="text-overline text-uppercase">Core Team</div>
            </div>
          </q-img>
          <q-card-actions class="text-overline text-uppercase">
            Systems Sorcerer
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-auto q-ml-lg">
        <q-card flat bordered class="core-member">
          <q-img src="team/gurkirat.png">
            <div class="absolute-bottom text-right name-header">
              <div class="text-h6">Gurkirat S</div>
              <div class="text-overline text-uppercase">Core Team</div>
            </div>
          </q-img>
          <q-card-actions class="text-overline text-uppercase">
            Stack Whisperer
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div class="row flex-center q-mb-md">
      <!-- team -->
      <div class="col-xs-12 col-md-auto q-mr-lg">
        <q-card flat bordered class="team-member">
          <q-img src="team/sadiq.png">
            <div class="absolute-bottom text-right name-header">
              <div class="text-h6">Sadiq A</div>
              <div class="text-overline text-uppercase">Engg. Team</div>
            </div>
          </q-img>
          <q-card-actions class="text-overline text-uppercase">
            AI Alchemist
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-auto q-mx-lg">
        <q-card flat bordered class="team-member">
          <!-- <q-img src="team/samruddhi.png"> -->
          <q-img src="team-woman.jpg">
            <div class="absolute-bottom text-right name-header">
              <div class="text-h6">Samruddhi S</div>
              <div class="text-overline text-uppercase">UI/UX</div>
            </div>
          </q-img>
          <q-card-actions class="text-overline text-uppercase">
            Pixel Picasso
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-auto q-ml-lg">
        <q-card flat bordered class="team-member">
          <!-- <q-img src="team/shamees.png"> -->
          <q-img src="team-man.jpg">
            <div class="absolute-bottom text-right name-header">
              <div class="text-h6">Shamees R</div>
              <div class="text-overline text-uppercase">Engg. Team</div>
            </div>
          </q-img>
          <q-card-actions class="text-overline text-uppercase">
            Code Conjurer
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div class="row flex-center q-mb-sm">
      <div class="col xs-12 col-md-auto q-mr-lg">
        <q-card flat bordered class="intern-member">
          <q-img src="team/noel.png">
            <div class="absolute-bottom text-right name-header">
              <div class="text-h6">Noel J</div>
              <div class="text-overline text-uppercase">Intern</div>
            </div>
          </q-img>
          <q-card-actions class="text-overline text-uppercase">
            Application Apprentice
          </q-card-actions>
        </q-card>
      </div>
      <div class="col xs-12 col-md-auto q-ml-lg">
        <q-card flat bordered class="intern-member">
          <q-img src="team-man.jpg">
            <!-- <q-img src="team/nikhil.png"> -->
            <div class="absolute-bottom text-right name-header">
              <div class="text-h6">Nikhil V</div>
              <div class="text-overline text-uppercase">Intern</div>
            </div>
          </q-img>
          <q-card-actions class="text-overline text-uppercase">
            Application Apprentice
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script setup></script>
<style scoped>
.name-header {
  background-color: rgba(0, 0, 0, 0.3);
}
.founding-member {
  border-radius: 1rem;
  width: 420px;
}
.core-member {
  border-radius: 1rem;
  width: 350px;
}
.team-member {
  border-radius: 1rem;
  width: 300px;
}
.intern-member {
  border-radius: 1rem;
  width: 256px;
}
</style>
