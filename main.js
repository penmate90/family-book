var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
var count=0;
function update()
{ console.log("inside")
 
if (count==5 ) {
  count=0
  console.log("counted")
} else{
  document.getElementById("family_member_image").src=images[count];
  document.getElementById("family_member_name").innerHTML=names[count];
  
  count=count +1;
  console.log(count)

}
  
}
