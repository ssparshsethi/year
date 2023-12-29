function startClassification() { navigator.mediaDevices.getUserMedia({ audio: true}); classifier =
ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',
modelReady); } function modelReady(){ classifier.classify}

function gotResults(error, results){
    if(error){
        console.error(error);
      
    }
}{
    
console.log(gotresult);
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;

document.getElementById("result_lable").innerHTML = 'I can hear - '+
results[0].lable;

document.getElementById("result_confidence").innerHTML = 'Accuracy- '+
(results[0].confidence*100).toFixed(2)+"%";

document.getElementById("result_lable").stylecolor="rgb(" + random_number_r +","
+random_number_g+","+random_number_b+")";

ocument.getElementById("result_confidence").stylecolor="rgb(" + random_number_r +","
+random_number_g+","+random_number_b+")";

img = document.getElementById('alien1');
img1 = document.getElementById('alien2');
img2= document.getElementById('alien3');
img3 = document.getElementById('alien4');

if(result[0].lable == "Clap"){
    img.src ='aliens-01.gif';
    img1.src ='aliens-02.png';
    img2.src ='aliens-03.png';
    img3.src ='aliens-04.png';
}else if(result[0].lable == "Bell"){
    img.src ='aliens-01.png';
    img1.src ='aliens-02.gif';
    img2.src ='aliens-03.png';
    img3.src ='aliens-04.png';
}else if(result[0].lable == "Snapping")
{
    img.src ='aliens-01.png';
    img1.src ='aliens-02.png';
    img2.src ='aliens-03.gif';
    img3.src ='aliens-04.png';
}else {
    img.src ='aliens-01.png';
    img1.src ='aliens-02.png';
    img2.src ='aliens-03.png';
    img3.src ='aliens-04.png';
}

}

