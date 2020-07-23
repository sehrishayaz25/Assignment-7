//chp52-57
img=[]
img[0]="This PC/D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/1.jpg"
img[1]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/2.jpg"
img[2]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/3.jpg"
img[3]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/4.jpg"
img[4]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/5.jpg"
img[5]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/6.jpg"
img[6]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/7.jpg"
img[7]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/8.jpg"
img[8]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/9.jpg"
img[9]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/10.jpg"
img[10]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/11.jpg"
img[11]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/12.jpg"
img[12]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/13.jpg"
img[13]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/14.jpg"
img[14]="D:/A Web & Mobile Hybrid App Development Course (Saylani)/Assignment 6/15.jpg"

var modal = document.getElementById('modal');

for(i=0;i<15;i++){

    document.write(" <img src="+img[i]+" onclick="+modal.classList.add('modal-open'),modal.classList.remove('modal-close')+" > </img>" )
}