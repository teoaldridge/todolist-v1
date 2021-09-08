//jshint: esversion:6

exports.getDate =  function() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  return today.toLocaleDateString("en-US", options);
}

exports.getDay = getDay;

function getDay(){
  const today = new Date();

  const options = {
    weekday: "long"
  };

  const day = today.toLocaleDateString("en-US", options);

  return day;
}
