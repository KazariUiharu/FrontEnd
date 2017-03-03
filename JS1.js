/*
 * @CreateTime: Mar 4, 2017 1:24 AM 
 * @Author: undefined 
 * @Contact: undefined 
 * @Last Modified By: undefined
 * @Last Modified Time: Mar 4, 2017 1:27 AM
 * @Description: Modify Here, Please  
 */
document.writeln("Hello,world!");
//function ad(){
//    window.open("Test1.html","Test1","height=141,width=693,top=100,left=200");
//}
//setTimeout(ad,5000);


function Student(props){
    this.name=props.name||"匿名";
}

Student.prototype.hello=function(){
    alert("Hello, "+this.name+"!");
};

function PrimaryStudent(props){
    Student.call(this.props);
    this.grade=props.grade||1;
}

function F(){

}

F.prototype=Student.prototype;

PrimaryStudent.prototype=new F();

PrimaryStudent.prototype.constructor=PrimaryStudent;

PrimaryStudent.prototype.getGrade= function () {
    return this.grade;
}
function CreateStudent(props){
    return new Student(props||{});
}

var xiaoming =CreateStudent({
    name:"小明",
    grade:2});

document.writeln(xiaoming.name);

