function calculateDays() {
  const date1 = document.getElementById("date1").value;
  console.log(date1);
  const date2 = document.getElementById("date2").value;
  console.log(date2);

  const newDate1 = new Date(date1);
  const newDate2 = new Date(date2);
  const timeDiff = newDate2 - newDate1;
  const diffDay = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  document.getElementById("output").innerHTML = diffDay;
}
