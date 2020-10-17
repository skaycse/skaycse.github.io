var repeat;

function getMeaning() {
  fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${
      document.getElementsByClassName("word")[0].value
    }`
  )
    .then((res) => res.json())
    .then((jsn) => {
        if(jsn[0]){
        let meaning = jsn[0].meanings[0].definitions[0].definition;
          $('.sub.header').text(meaning)
      }
        else {
          $('.sub.header').text("Are you sure this is a valid word?")
      }
    });
}

function GetDateTime() {
  var date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  getsetValue("day", day);
  getsetValue("month", month);
  getsetValue("year", year);
  getsetValue("hour", hour);
  getsetValue("min", min);
  getsetValue("seconds", sec);
  
}

window.onload = function () {
    GetDateTime();
    repeat = setInterval(GetDateTime,1000)
    $(".meaning").show();
};

function getsetValue(classname, value) {
  $(".ui.purple.inverted.statistic .value.seconds").transition("pulse");
  document.getElementsByClassName(classname)[0].innerText = value;
}


function updateH1($event) {
    $('.sub.header').text("")
    $('.ui.header.ui.segment.inverted span').text($event.value)
}