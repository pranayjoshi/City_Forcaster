function weather() {
	var city_name = document.getElementById("city_name").value
	eel.weather(city_name)(temprature)	
}
function temprature(temp) {
  swal(temp)
}