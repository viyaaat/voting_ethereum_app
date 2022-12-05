<template>
  <v-main>
    <section id="start">
      <v-row>
        <v-img class="fill-height" src="@/assets/hero.png">
          <v-theme-provider dark>
            <v-container fill-height style="max-height: 100vh">
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2',
                    ]"
                    class="font-weight-light"
                  >
                    CHOOSE
                  </span>

                  <br />

                  <span
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4',
                    ]"
                    class="font-weight-black"
                  >
                    WISELY
                  </span>
                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$vuetify.goTo('#projects')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section v-show="hasMetaMask" id="projects">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-5">CRYPTO - PROJECT</h2>
        <div></div>

        <v-responsive
          class="mx-auto title font-weight-light mb-5"
          max-width="720"
        >
          Choose the project that you like the most and you might just see in
          your city. The project with the most votes wins. So far,
          {{ this.totalVoteCount }} people voted -- Must Vote.
        </v-responsive>

        <v-row
          align="center"
          justify="center"
          class="text-center mt-n10 mb-n10"
        >
          <v-col> </v-col
          ><v-col>
            <v-card class="mx-auto" outlined max-width="333">
              <v-img src="@/assets/trash.png" height="300px"></v-img>

              <v-card-title class="font-weight-black text-uppercase">
                {{ this.project1.name }}</v-card-title
              >

              <v-card-subtitle class="text-left font-weight-bold text-uppercase"
                >Total Votes: {{ this.project1.voteCount }}</v-card-subtitle
              >

              <v-card-actions>
                <v-btn
                  class="font-weight-bold"
                  color="#122485"
                  @click="showProject1 = !showProject1"
                  text
                  >See More ...</v-btn
                >

                <v-spacer></v-spacer>

                <v-btn icon @click="showProject1 = !showProject1">
                  <v-icon>{{
                    showProject1 ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="showProject1">
                  <v-divider></v-divider>
                  <v-card-text class="text-left">{{
                    this.project1.description
                  }}</v-card-text>
                  <v-btn
                    class="font-weight-bold"
                    color="#0248bb"
                    text
                    @click="vote(1)"
                    >Cast Your Vote</v-btn
                  >
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="mx-auto" outlined max-width="333">
              <v-img src="@/assets/cowork.png" height="300px"></v-img>

              <v-card-title class="font-weight-black text-uppercase">{{
                this.project2.name
              }}</v-card-title>

              <v-card-subtitle class="text-left font-weight-bold text-uppercase"
                >Total Votes: {{ this.project2.voteCount }}</v-card-subtitle
              >

              <v-card-actions>
                <v-btn
                  class="font-weight-bold"
                  color="#122485"
                  @click="showProject2 = !showProject2"
                  text
                  >See More ...</v-btn
                >

                <v-spacer></v-spacer>

                <v-btn icon @click="showProject2 = !showProject2">
                  <v-icon>{{
                    showProject2 ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="showProject2">
                  <v-divider></v-divider>
                  <v-card-text class="text-left">
                    {{ this.project2.description }}
                  </v-card-text>
                  <v-btn
                    class="font-weight-bold"
                    color="#0248bb"
                    text
                    @click="vote(2)"
                    >Cast Your Vote</v-btn
                  >
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="mx-auto my-12" outlined max-width="333">
              <v-img src="@/assets/light.png" height="300px"></v-img>

              <v-card-title class="font-weight-black text-uppercase">{{
                this.project3.name
              }}</v-card-title>

              <v-card-subtitle class="text-left font-weight-bold text-uppercase"
                >Total Votes: {{ this.project3.voteCount }}</v-card-subtitle
              >

              <v-card-actions>
                <v-btn
                  class="font-weight-bold"
                  color="#122485"
                  @click="showProject3 = !showProject3"
                  text
                  >See More ...</v-btn
                >

                <v-spacer></v-spacer>

                <v-btn icon @click="showProject3 = !showProject3">
                  <v-icon>{{
                    showProject3 ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="showProject3">
                  <v-divider></v-divider>
                  <v-card-text class="text-left">
                    {{ this.project3.description }}
                  </v-card-text>
                  <v-btn
                    class="font-weight-bold"
                    color="#0248bb"
                    text
                    @click="vote(3)"
                    >Cast Your Vote</v-btn
                  >
                </div>
              </v-expand-transition>
            </v-card></v-col
          >
          <v-col> </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>

    <section v-show="!hasMetaMask" id="projects">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="font-weight-bold mb-5">
          MetaMask is required to use the app.
        </h2>
        <div></div>
      </v-container>
    </section>
  </v-main>
</template>

<script>
import Web3 from "web3";
const Projects = require("../../build/contracts/Projects.json");

export default {
  name: "Projects",
  data: () => ({
    showAll: false,
    showProject1: false,
    showProject2: false,
    showProject3: false,
    totalVoteCount: 0,
    project1: {},
    project2: {},
    project3: {},
    pageHeight: 0,
    projectsContract: {},
    metaMaskAcc: {},
    hasMetaMask: false,
  }),
  methods: {
    async initialize() {
      if (window.ethereum) {
        this.hasMetaMask = true;
        const web3 = new Web3(window.ethereum);
        //get contract creator
        let contractAcc = await web3.eth
          .getAccounts(console.log)
          .catch((err) => {
            console.error("heh");
          });
        console.log("contract created by: " + contractAcc[0]);
        //get acc on metamask
        this.metaMaskAcc = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("current acc on metamask: " + this.metaMaskAcc[0]);
        const netId = await web3.eth.net.getId();
        const deployedNetwork = Projects.networks[netId];
        //get our contract
        this.projectsContract = new web3.eth.Contract(
          Projects.abi,
          deployedNetwork.address
        );
        //call contract's methods
        this.totalVoteCount = await this.projectsContract.methods
          .getVotedCount()
          .call();
        this.project1 = await this.projectsContract.methods.projects(1).call();
        this.project2 = await this.projectsContract.methods.projects(2).call();
        this.project3 = await this.projectsContract.methods.projects(3).call();
      }
    },
    async vote(projectId) {
      await this.projectsContract.methods
        .vote(projectId)
        .send({ from: this.metaMaskAcc[0] });
      switch (projectId) {
        case 1:
          this.project1 = await this.projectsContract.methods
            .projects(1)
            .call();
          break;
        case 2:
          this.project2 = await this.projectsContract.methods
            .projects(2)
            .call();
          break;
        case 3:
          this.project3 = await this.projectsContract.methods
            .projects(3)
            .call();
          break;
      }
      this.totalVoteCount = await this.projectsContract.methods
        .getVotedCount()
        .call();
    },
  },
  created: function() {
    this.initialize();
  },
};
</script>
