var customerName = "bob";

function getCustomerName() {
  return customerName;
}
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = "not bob";
}
function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer
}
function changeLeastFavoriteCustomer(newCustomer) {
    if (!newCustomer) {
      throw new Error("Assignment to constant variable.");
    }
    let leastFavoriteCustomer = newCustomer;
  }