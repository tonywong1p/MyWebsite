<template>
  <div>
    <v-content class="grey lighten-2">
      <v-container>
        <v-layout wrap justify-center>
          <v-flex xs12 sm10 md8>
            <v-card>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selfItems: [{
            icon: 'person',
            content: 'fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg fghsfgdfg'
          },
          {
            icon: 'phone',
            content: '(+852) 6771-0852'
          }, {
            icon: 'email',
            content: 'tonywong1p@msn.com'
          }
        ],
      }
    }
  }
</script>