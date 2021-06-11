function pagechange(frompage, topage) {
    let page=document.getElementById('formpage_'+frompage);
    if (!page) return false;
    page.className='hiddenblock';
    page=document.getElementById('formpage_'+topage);
    if (!page) return false;
    page.className="visibleblock";
    return true;
}
function validate(section){
    let nextbutton=document.getElementsByName(section+"next")[0];
    switch(section){
        case "section1":{
            let nameinput=document.getElementsByName("fname")[0].value;
            if(nameinput.length>3){
                document.getElementById(section+"error").innerText="";
                nextbutton.id="none";
                nextbutton.disabled=false;
            }
            else{
                document.getElementById(section+"error").innerText="Name cannot be less than 3 characters";
                nextbutton.id="disabled";
                nextbutton.disabled=true;
            }
            break;
        }
        case "section2":{
            let dob=document.getElementsByName("dob")[0].value;
            let dobnum=Number(dob.split("-")[0]);
            if(dobnum>2017){
                document.getElementById(section+"error").innerText="Enter valid DOB";
                nextbutton.id="disabled";
                nextbutton.disabled=true;
            }
            else{
                document.getElementById(section+"error").innerText="";
                nextbutton.id="none"; 
                nextbutton.disabled=false; 
            }
            break;
        }
        case "section3":{
            let achievements=document.getElementsByName("achievements")[0].value;
            if(achievements.length>3){
                document.getElementById(section+"error").innerText="";
                nextbutton.id="none";
                nextbutton.disabled=false;
            }
            else{
                document.getElementById(section+"error").innerText="Enter atleast one acheivement to proceed";
                nextbutton.id="disabled"; 
                nextbutton.disabled=true; 
            }
            break;
        }
        case "section4":{
            if(document.getElementsByName('none')[0].checked || document.getElementsByName('mother')[0].checked || document.getElementsByName('father')[0].checked || document.getElementsByName('brother')[0].checked || document.getElementsByName('sister')[0].checked){
                document.getElementById(section+"error").innerText="";
                nextbutton.id="none";
                nextbutton.disabled=false
            }else{
                nextbutton.id="disabled";
                nextbutton.disabled=true;
                document.getElementById(section+"error").innerText="Select atleast one option to proceed";
            }
            break;
        }
    }
}