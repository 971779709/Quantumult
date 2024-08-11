let body = $response.body;
body = body.replace(/is_unlock":"0"/g,'is_unlock":"1"')
.replace(/is_free":"\d"/g,'is_free":"1"')
.replace(/is_show":"\d"/g,'is_show":"1"')
.replace(/is_all":"\d"/g,'is_all":"1"')
.replace(/is_see":"\d+"/g,'is_see":"1"');
$done({body});
