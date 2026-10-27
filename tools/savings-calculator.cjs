// Original calculation module: JR Academy, CC BY 4.0 https://creativecommons.org/licenses/by/4.0/
/* Pure calculation shared by the website and local open-source package. No network or storage. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.HYMSavings=api;})(typeof globalThis==='object'?globalThis:this,function(){
 function calculate({fee,spend,rate,cap,uses,uncapped}){
  for(const [name,value] of Object.entries({fee,spend,rate,uses}))if(typeof value!=='number'||!Number.isFinite(value)||value<0)throw new RangeError(name);
  if(fee>1000000||spend>1000000||rate>100||!Number.isSafeInteger(uses)||uses<1||uses>100)throw new RangeError('range');
  if(typeof uncapped!=='boolean')throw new RangeError('uncapped');
  if(!uncapped&&(typeof cap!=='number'||!Number.isFinite(cap)||cap<0||cap>1000000))throw new RangeError('cap');
  const cents=n=>Math.round((n+Number.EPSILON)*100);
  const perUse=Math.min(Math.round(cents(spend)*rate/100),uncapped?Infinity:cents(cap));
  const discount=perUse*uses,feeCents=cents(fee);
  return {perUse:perUse/100,discount:discount/100,fee:feeCents/100,net:(discount-feeCents)/100};
 }
 return {calculate};
});
