function getInnerText(inputId) {
  const getId = document.getElementById(inputId);
  const getInnerTextString = getId.innerText;
  const getInnerText = parseFloat(getInnerTextString);
  return getInnerText;
}

//
document.getElementById("apply-btn").disabled = true;
document.getElementById("Purchase-btn").disabled = true;

let total = 0;
function handleClick(target) {
  const selectedItemsContainer = document.getElementById("selected-products");
  const productName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = productName;
  selectedItemsContainer.appendChild(li);

  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

  total = parseFloat(total) + parseFloat(price);
  const firstTotal = document.getElementById("total-price");
  firstTotal.innerText = total;

  const totalPrice = getInnerText("total-price");
  const applyBtn = document.getElementById("apply-btn");

  if (totalPrice >= 200) {
    applyBtn.disabled = false;
  }
  const purchaseBtn = document.getElementById("Purchase-btn");

  if (totalPrice > 0) {
    purchaseBtn.disabled = false;
  }
  document.getElementById("apply-btn").addEventListener("click", function () {
    const code = document.getElementById("coupon-field").value;

    if (code === "SELL200") {
      const totalFinal = document.getElementById("total-final");
      const totalFinalCalculation = parseFloat(
        firstTotal.innerText - (firstTotal.innerText * 20) / 100
      );
      totalFinal.innerText = totalFinalCalculation;

      const getDiscount = document.getElementById("discount");
      const discountCalculation =
        parseFloat(firstTotal.innerText) - parseFloat(totalFinalCalculation);
      getDiscount.innerText = discountCalculation.toFixed(2);
    } else {
      alert("not working");
    }
  });

}
document.getElementById('Purchase-btn').addEventListener('click', function(){
// // const purchaseBtn = document.getElementById('Purchase-btn')
//   const p = document.createElement('p');
//   p.innerHTML = `
  
// <button class="btn" onclick="my_modal_1.showModal()">click once</button>
// <dialog id="my_modal_1" class="modal">
//   <form method="dialog" class="modal-box">
//   <div >
//   <div class = "flex justify-center mt-3"><img src="./images/congo.png" alt=""></div>
//   <div>
//     <h1 class="text-3xl mt-3">Congratulations!</h1>
//     <p class = "font-medium t mt-3">Your Purchase the product</p>
    
//   </div>
// </div>
// <button
// class="btn btn-secondary bg-common-color p-2 w-full mt-3"
// id="Purchase-btn"
// >
// Go home 
// </button>
//     </div>
//   </form>
// </dialog>
//   ` })
//  purchaseBtn.appendChild(p);
//  document.getElementById('btn').addEventListener('click',function(){
//   window.location.href = 'index.html'
 })
// 

