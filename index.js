
var i1,i2;



var l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;
var a,s,d,m;
var micro={
ad:document.getElementById("add"),
mul:document.getElementById("times"),
su:document.getElementById("sub"),
di:document.getElementById("div"),
cent:document.getElementById("per"),
out:document.getElementById("output"),
ty:document.getElementById("inp1"),
tyy:document.getElementById("inp2"),
res:document.getElementById("clear"),

addition:function(){
a=(i1+i2);
l++;
},
subtraction:function(){
     s=(i1-i2);
     m++;
    },
    divide:function(){
        d=(i1/i2);
        n++;
        },
        multiply:function (){
            m=(i1*i2);
            o++;
            },
            percent:function (){
                m=(i1%i2);
                p++;
                },
                clear:function (){
                    document.getElementById("result").innerHTML=" ";
                    },
                    ca:function(){
                        i1=Number( document.getElementById("inp1").value);
                        },
                        cal:function(){
                            i2=Number( document.getElementById("inp2").value);
                            },

            output:function(){
                if(l>0){
                    document.getElementById("result").innerHTML=a;
            }
            if(m>0){
                document.getElementById("result").innerHTML=s;
        }
        if(n>0){
            if(i2==0){
                document.getElementById("result").innerHTML="cannot divide by 0";
            }
            else{
            
            document.getElementById("result").innerHTML=d;
            }
    }
    if(o>0){
        document.getElementById("result").innerHTML=m;
}
if(p>0){
    if(i2==0){
        document.getElementById("result").innerHTML="cannot divide by 0";
    }
    else{
        document.getElementById("result").innerHTML=m;
        alert("it is not percent operator,it is modulo operator")
    }
}


             
                }

};

micro.ad.addEventListener("click",micro.addition);
micro.su.addEventListener("click",micro.subtraction);
micro.mul.addEventListener("click",micro.multiply);
micro.di.addEventListener("click",micro.divide);
micro.cent.addEventListener("click",micro.percent);
micro.out.addEventListener("click",micro.output);
micro.ty.addEventListener("blur",micro.ca);
micro.tyy.addEventListener("blur",micro.cal);
micro.res.addEventListener("click",micro.clear);


    