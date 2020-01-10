
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1481803721972443'); 

function track() {
console.log('Pixel triggered');
fbq('track', 'Purchase', {
    content_ids: ['1', '2', '3'],
    content_name: ['eCover Bio Washing', 'Sensodyne Mint Fresh', 'Vanish Stain Remover'],
    content_type: 'Delivery',
    currency: 'GBP',
    value: 11.93
});
}

//fbq('track', 'PageView');
//document.getElementById("id_WkLTz_4ci").addEventListener("click", track); 
track();
