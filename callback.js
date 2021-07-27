function callback(yes, no) {
    console.log(yes()+ ' ' +no());
}
function yes(){
    return 'yes1';
}
function no() {
    return 'no1';

}
callback(yes, no);
callback(()=> "dvs", ()=>'chudasama');