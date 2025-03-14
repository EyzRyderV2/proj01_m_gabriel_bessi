const navSelect = document.getElementById("navSelect")
navSelect.addEventListener("change", (event) => {
  console.log(navSelect.value)
  const link = document.createElement("a")
  link.href=navSelect.value
  link.target="_blank"
  link.click()
  navSelect.value=""
})