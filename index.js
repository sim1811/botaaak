const Discord = require("discord.js");
const bot = new Discord.Client();

const token = 'NjMyMjM0MjY2OTc3MjM5MDYy.XaCcCw.oooLjAPvGS_N--QWdwflmtXy8v4';

bot.on("ready", () => {console.log("this bot is online");

})

bot.on("message", msg=>{
    if(msg.content === "HELLO"){
        msg.reply("Ahoj, ja jsem krejzy krejzyc");
        }
    
       

    })


bot.on("message", msg=>{
    if(msg.content === "!TERKA"){
        msg.reply("Dal by sis Terku?", {files: ["img/terka.jpg"] });
        }
        
           
    
        })


bot.on("message", msg=>{
    if(msg.content === "!JO"){
        msg.reply("Tak na to zapomen!!!", {files: ["img/david.jpg"] });
        }
        
           
    
        })

        
           
    
        
        
        bot.on("message", msg=>{
            if(msg.content === "!NE"){
                msg.reply("Delas dobre kluku <3333", {files: ["img/majk.jpg"] });
                }
                
                   
            
                }) 
                bot.on("message", msg=>{
                    if(msg.content === "!DAVID"){
                        msg.reply("Vyyyyych", {files: ["img/dejvid.jpg"] });
                        }
                        
                           
                    
                        }) 
                        
bot.on("message", msg=>{
if(msg.content === "!VENDY"){
msg.reply("Chtel bys to citit?", {files: ["img/vendy.jpg"] });
        }
                                
                                   
                            
                                })

bot.on("message", msg=>{
if(msg.content === "pls meme"){
msg.reply("To bude asi lááááska", {files: ["img/laska.jpg"] });
        }
                                
                                   
                            
                                })

bot.on("message", msg=>{
if(msg.content === "!CIBA"){
msg.reply("Dobre mami, uz pujdu spat.", {files: ["img/ciba.jpg"] });
        }
                                
                                   
                            
                                })

bot.on("message", msg=>{
if(msg.content === "!KURVA"){
msg.reply("Nechces poslat nejakou nudesku hezoune???", {files: ["img/kopejda.jpg"] });
        }
                                
                                   
                            
                                }) 

                             bot.on("message", msg=>{
                                    if(msg.content === "!HIWE"){
                                    msg.reply("Ulovis me na hajwu??", {files: ["img/hiwe.jpg"] });
                                            }
                                                                    
                                                                       
                                                                
                                                                    }) 
                                    



                                                                        
                                                                        
 bot.on("message", msg=>{
if(msg.content === "!PRDEL"){
msg.reply({files: ["img/zadek.jpg"] });
        }
                                
                                   
                            
                                })  

bot.on("message", msg=>{
if(msg.content === "!UHLI"){
msg.reply({files: ["img/uhli.jpg"] });
        }
                                
                                   
                            
                                })  
                                
                                
bot.on("message", msg=>{
if(msg.content === "!KOKOT"){
msg.reply("lovim cicinky na hajwu" ,{files: ["img/kokot.jpg"] });
        }
                                
                                   
                            
                                })                                      

                                

bot.on("message", msg=>{
if(msg.content === "!ROOF"){
msg.reply("Deleeeeej" ,{files: ["img/jirka.jpg"] });
        }
                                
                                   
                            
                                }) 


bot.on("message", msg=>{
if(msg.content === "!ip"){
msg.reply("ms5.hicoria.cloud:32745"  );
        }
                                
                                   
                            
                                })

bot.login(token);
