// var url = require('./person.json');
// console.log(url, '>>>>>');
// var div = document.createElement('div');
// var img = document.createElement('img');
// var banner = document.getElementById('banner');

fetch('./assets/js/person.json')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    const {students} = data;
    
    students.map(person => {
      let card = document.createElement('div');
      let cardImage = document.createElement('div');
      let cardContent = document.createElement('div');
      let nameDiv = document.createElement('div');
      let wordDiv = document.createElement('div');
      let img = document.createElement('img');
      let paraText = document.createElement('p');
      let paraName = document.createElement('p');
      let banner = document.getElementById('banner');
      let cardWrapper = document.getElementById('cardWrapper');
      img.src = person.image;
      cardImage.append(img);
      paraName = `${person.firstname} ${person.lastname}`;
      paraText = person.word;
      nameDiv.append(paraName);
      wordDiv.append(paraText);
      cardContent.append(nameDiv);
      cardContent.append(wordDiv);
      card.append(cardImage);
      card.append(cardContent);
      card.setAttribute('class', 'card');
      cardImage.setAttribute('class', 'card-image')
      cardContent.setAttribute('class', 'card-content');
      cardWrapper.append(card);
      banner.append(cardWrapper);
    });
    // students.map(boo => {
    //   const getUrl =  boo.url;
    //   console.log(getUrl, '111')
    //   img.src = getUrl;
    //   img.src = getUrl;
    //   banner.appendChild(img);

    // })
//     for(var i=0; i<students.length; i++){
//       var div = document.createElement('div');
// var img = document.createElement('img');
// var banner = document.getElementById('banner');
//       img.src = students[i].url;
//       div.append(img)
//       banner.append(div)
//     }
    // console.log(students)
  })
  .catch(error => console.log(error, '>>>>'));

// fetch('./person.json')
//      .then(function(res) {
//        return res.json();
//      })
//      .then(function(data){
//        var {students} = data;
//        students.map(name => console.log(name, '>>>'));
      //// data.students.forEach(function(name){
     // //   console.log(name.firstname)
     // // })
      ////  console.log(data.students[0])
    //  })