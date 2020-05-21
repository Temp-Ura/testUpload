<template>
  <div>
      <div class="section text-center">
     
      <h1 style="font-size: 5em; margin-top:50px !important">Iscrizioni: {{form.length}}</h1>
      <apexchart
    class="chart1"
    width="100%"
    height="500px"
    type="area"
    :options="chartOptions"
    :series="series"
></apexchart>
      </div>
      <!-- <pre>{{series}}</pre> -->
  </div>
</template>

<script>

import VueApexCharts from "vue-apexcharts";
import { db } from "@/firebase";
// Other imports


export default {

  name: "Data",
//   created: async function() {
//     //this.fetchData();
//     const docRef = db.collection("contacts");

//     // function(snapshot) {
//     // var key = snapshot.key; // "ada"
//     // var childKey = snapshot.child("name").key; // "last"
//     // };
//     //let data = docRef.get();
//     let data = (await docRef.get()).data() ;
//     console.log(data)
//     // if (!data) {
//     //   data = { test: ''}
//     //   docRef.set(data)
//     // }

//     this.form = data;
//     // this.state = 'synced'
//   },
//  firestore() {
//    return {
// //    var robba = db.collection("contacts");
// //     this.form = robba
//     form : db.collection("contacts"),
    
// contacts: {
//         // collection reference.
//         form: db.collection("contacts"),

//         object: true,
// //         resolve: contacts => {
// //             const NewUser = Object.values(contacts.prova);
// //             this.form2 = NewUser
            
// //             // this.series = [
// //             //     {
// //             //         name: "new users",
// //             //         data: [
// //             //                     [new Date("May 1, 2020"), newUsers],
// //             //                     [new Date("May 22, 2020"), 40],
// //             //                 ]


// //             //     }
// //             // ]
// //         },
// //         reject: err => {
// //           // collection is rejected
// //         }
//     }
//    }
//   },
mounted(){
    var i = 1
    db
      .collection('contacts')
      .get()
      .then(snap => {
        const testCollection = [];
        snap.forEach(doc => {
          testCollection.push([new Date(doc.id)]);

        });

    testCollection.sort(function(a, b) {
    var dateA = a[0], dateB = b[0];
    return dateA - dateB;
});
        testCollection.forEach(element => element.splice(1,0,i++))
        //console.log(testCollection)
        this.form = testCollection
        //this.form2 = testCollection.filter(a => a[1] % 5 == 0); 
        this.series = [
            {
                name: "Iscrizioni",
                data : this.form
            }
        ]
      });
  },



  data(){
      return {
          form: "",
          form2: "",
  chartOptions: {
      stroke: {
  curve: 'smooth',
},
fill: {
  type: 'solid' 
},

            colors: [ "#7b42f6"],
            legend: {
              labels: {
                colors: "black"
              },
              position: "top"
            },
            tooltip: {
              theme: "dark"
            },
            grid: {
              xaxis: {
                lines: {
                  show: true
    }
              },
              yaxis: {
                lines: {
                  show: false
                }
              }
            },
            chart: {
              id: "users"
            },
            xaxis: {
              type: "datetime"
            }
          },
          series: [
          ]
      };
    }, 
  components:{
      apexchart: VueApexCharts
  },
//   firestore() {
//     return {
//       contacts: {
//         // collection reference.
//         ref: db.collection("contacts"),

//         object: true,
//         resolve: contacts => {
//             const NewUser = contacts.prova.test;
//             this.form = NewUser
//             console.log(NewUser)
//             // this.series = [
//             //     {
//             //         name: "new users",
//             //         data: [
//             //                     [new Date("May 1, 2020"), newUsers],
//             //                     [new Date("May 22, 2020"), 40],
//             //                 ]


//             //     }
//             // ]
//         },
//         reject: err => {
//           // collection is rejected
//         }
//       }
//     }
//    }

        
        // Bind the collection as an object if you would like to.
  // Other properties
 
}
</script>


<style lang="scss" scoped>
.text-center{
    min-height: 100vh;
}
</style>