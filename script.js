const tipcalcy=()=>{
    let amount=document.getElementById('bill_amount').value;
    let perc=document.getElementById('tip_percent').value;
    let tip=amount*(perc/100);
    let person=document.getElementById('bill_person').value;
    let tipforeach=tip/person;
    document.getElementById('total_bill').value=tipforeach;
    
}