var img = ["https://images-na.ssl-images-amazon.com/images/I/518aG4aF5+L._SY498_BO1,204,203,200_.jpg","https://thumbs.dreamstime.com/b/lovely-grandpa-walking-walking-stick-cute-grandpa-106527138.jpg","https://thumbs.dreamstime.com/b/sister-portrait-pretty-teenage-girl-schoolgirl-long-brown-hair-satchel-bag-school-uniform-skirt-blouse-daughter-86364433.jpg","https://thumbs.dreamstime.com/z/happy-cute-smile-kid-boy-crossed-arms-happy-cute-smile-kid-boy-crossed-arms-adult-attitude-avatar-background-cartoon-casual-164555915.jpg"];
var names = ["Family book","Ranbir Singh","Diljeet Singh","Rocky Singh","Alia Singh","Soni Singh"];
var i = 0;
function update(){
    i++;
    var family_array = 5;
    if(i > family_array){
        i = 0;
    }
    var updated_image = image[i];
    var updated_name = name[i];
    document.getElementById("img").src = updated_image;
    document.getElementById("display_name").innerHTML = updated_name;

}