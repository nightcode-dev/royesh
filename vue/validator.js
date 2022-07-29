class Valid {
validUandP(string){
   var letAnum = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
   var rebText = '';
   for(var i =0;i < letAnum.length;i++){
      for(var j =0;j < string.length;j++){
         if(string[j] == letAnum[i]){
            rebText += string[j]
         }else{
            continue
         }
      }
   }
   if(rebText.length == string.length){
      return true
   }else{
      return false
   }
}

validEmail(string){
   var letAnum = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','@','.']
   var rebText = '';
   for(var i =0;i < letAnum.length;i++){
      for(var j =0;j < string.length;j++){
         if(string[j] == letAnum[i]){
            rebText += string[j]
         }else{
            continue
         }
      }
   }
   if(rebText.length == string.length){
      return true
   }else{
      return false
   }
}

validParsain(string){
var letAnum = ['ض','ص','ث','ث','ق','ف','غ','ع','ه','خ','ح','ج','ش','س','ی','ب','ل','آ','ا','ت','ن','م','ک','گ','ط','ظ','ژ','ز','ر','ذ','د','پ','پ','و','چ'," "]
   var rebText = '';
   for(var i =0;i < letAnum.length;i++){
      for(var j =0;j < string.length;j++){
         if(string[j] == letAnum[i]){
            rebText += string[j]
         }else{
            continue
         }
      }
   }
   if(rebText.length == string.length){
      return true
   }else{
      return false
   }
}

valid(string){
var letAnum = ['ض','ص','ث','ث','ق','ف','غ','ع','ه','خ','ح','ج','ش','س','ی','ب','ل','ا','ت','ن','م','ک','گ','ط','ظ','ژ','ز','ر','ذ','د','پ','پ','و','چ'," ",'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','?','!','\n','-']
   var rebText = '';
   for(var i =0;i < letAnum.length;i++){
      for(var j =0;j < string.length;j++){
         if(string[j] == letAnum[i]){
            rebText += string[j]
         }else{
            continue
         }
      }
   }
   if(rebText.length == string.length){
      return true
   }else{
      return false
   }
}

validNumber(string){
   var letAnum = ['0','1','2','3','4','5','6','7','8','9']
   var rebText = '';
   for(var i =0;i < letAnum.length;i++){
      for(var j =0;j < string.length;j++){
         if(string[j] == letAnum[i]){
            rebText += string[j]
         }else{
            continue
         }
      }
   }
   if(rebText.length == string.length){
      return true
   }else{
      return false
   }
}

}
exports.valid = Valid