
function homeCtrl() {
   let hvm = this;

//   hvm.venue = {
//      name: 'Bartle Hall',
//     img: require('../../assets/images/logos/07-26-07-34-kansas-city-convention-center.png'),
//   url: 'https://www.vml.com/',
//      address: '301 W 13th Street, Kansas City MO 64105'
//  };
//   hvm.map = {
  //    center: {
  //      latitude: 39.098913,
  //       longitude: -94.587681
  //    },
//      zoom: 15,
//      marker: {
//         id:0,
//         coords: {
//            latitude: 39.098913,
//            longitude: -94.587681
//         }
//      }
//   };

   hvm.venue = {
      name: 'VML, inc. Headquarters',
      img: require('../../assets/images/logos/FINAL_TWO_COLOR.png'),
      url: 'https://www.vml.com/',
      address: '250 Richards Rd Kansas City, MO 64116'
   };
   hvm.map = {
      center: {
         latitude: 39.120875,
         longitude: -94.590542
      },
      zoom: 15,
    marker: {
         id:0,
         coords: {
            latitude: 39.120875,
            longitude: -94.590542
         }
      }
   };
}

homeCtrl.$inject = [];

function codeCtrl() {
   let cvm = this;
   cvm.tools = [{
      name: 'cupcake',
      url: '',
      img: require('../../assets/images/cupcake1.png')
   }, {
      name: 'cupcake',
      url: '',
      img: require('../../assets/images/cupcake2.png')
   }, {
      name: 'cupcake',
      url: '',
      img: require('../../assets/images/cupcake3.png')
   }, {
      name: 'cupcake',
      url: '',
      img: require('../../assets/images/code.png')
   }];
}

function mentorCtrl() {
   let mvm = this;

   mvm.leaders = [{
      name: 'Jennifer Wadella',
      title: 'Founder',
      img: require('../../assets/images/mentors/jennifer.png'),
      twitter: 'likeOMGitsFEDAY'
   }, {
      name: 'Holli Hazelwood',
      title: 'Program Director',
      img: require('../../assets/images/mentors/Holli.jpeg'),
      twitter: 'girlsgetitdone1'
   },{
      name: 'Ivy Nelson',
      title: 'Co-Director',
      img: require('../../assets/images/mentors/ivy_nelson.jpeg'),
      twitter: 'ivytechy'
   },{
      name: 'Jack Kolze',
      title: 'Mentor Director',
      img: require('../../assets/images/mentors/jack.png'),
      twitter: 'just_jacquelin'
   },{
      name: 'Krithika Nagarajan',
      title: 'Presentation Director',
      img: require('../../assets/images/mentors/Krithika.jpg')
   }, {
      name: 'Jackie Nguyen',
      title: 'Marketing Director',
      img: require('../../assets/images/mentors/jackie.jpeg'),
      twitter: 'jnguyen916'
   }];

   // mvm.mentors = [{
   //    name: 'Olivia Mark',
   //    title: 'Mentor',
   //    img: require('../../assets/images/mentors/oliviamark.jpg'),
   //    twitter: 'opticspec'
   // }];
}

export default angular.module('home.controllers', [])
   .controller('homeCtrl', homeCtrl)
   .controller('codeCtrl', codeCtrl)
   .controller('mentorCtrl', mentorCtrl);
