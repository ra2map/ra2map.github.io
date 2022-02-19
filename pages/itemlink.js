
var xItemIDs={"50": "5a640770_21c706b3_0.html"
	, "7": "4b2f0699_7d4c164f_0.html"
	, "0": "3e2e063b_3a8f08d4_0.html"
	, "21": "521406d4_e8b219df_0.html"
	, "4": "4b33069a_7bf50c89_0.html"
	, "40": "5abd0791_c37024a6_0.html"
	, "19": "521106d2_db461166_0.html"
	, "34": "5acb077f_7a430ca3_0.html"
	, "18": "521606d5_e7b819cb_0.html"
	, "3": "520506cd_d94010f6_0.html"
	, "24": "4b3d069f_9aca17c7_0.html"
	, "20": "4b4106a1_9c411806_0.html"
	, "30": "520c06d0_fda12fe_0.html"
	, "25": "4b35069b_3acd1bc4_0.html"
	, "41": "4b37069c_19451315_0.html"
	, "14": "520f06d1_7d460d19_0.html"
	, "1": "520306cc_a4940f14_0.html"
	, "35": "520b06cf_f7fd1a34_0.html"
	, "17": "520706cd_8707170a_0.html"
	, "31": "520706ce_dc5c115f_0.html"
	, "16": "520d06d0_de7619b9_0.html"
	, "15": "521206d3_de071162_0.html"
	, "6": "520906ce_a5b10f12_0.html"
	, "37": "5b0b07aa_9b5e0da7_0.html"
	, "5": "4b4506a3_da101139_0.html"
	, "26": "521306d3_80321d6c_0.html"
	, "8": "520906cf_3a6108d1_0.html"
	, "32": "59e80739_7cd70cf5_0.html"
	, "36": "5aae0776_772035_0.html"
	, "47": "520606cd_527e2227_0.html"
	, "43": "521606d4_369d26da_0.html"
	, "77": "521006d1_5e2e2304_0.html"
	, "45": "520c06cf_125a1385_0.html"
	, "44": "521206d2_c18b249e_0.html"
	, "42": "521806d5_250b2666_0.html"
	, "9": "521406d3_f8421185_0.html"
	, "46": "520a06ce_6bac1b53_0.html"
	, "39": "5a580772_2f7207b_0.html"
	, "38": "521106d3_4be814a4_0.html"
	, "48": "734e083f_469b0928_0.html"
	, "10": "719507fb_8bc80d18_0.html"
	, "11": "719b07fe_8bc90d19_0.html"
	, "12": "719207f9_8bca0d1a_0.html"
	, "27": "719f07ff_7e6a0cec_0.html"
	, "2": "719307fa_a0e20ddd_0.html"
	, "13": "7af60893_3e201a1_0.html"
	, "28": "7ae9089f_91241e43_0.html"
	, "49": "692c07de_dd001170_0.html"
	, "54": "520c06cf_5b40158c_0.html"
	, "55": "4b37069b_44b71c4a_0.html"
	, "56": "520e06d0_a70a0f27_0.html"
	, "57": "4b4906a4_aa0d0f28_0.html"
	, "58": "5b2607b2_a83f0f15_0.html"
	, "59": "520b06ce_2055066a_0.html"
	, "61": "521206d2_dc5032b_0.html"
	, "65": "521006d1_a11e0e52_0.html"
	, "64": "520a06ce_56f20ab0_0.html"
	, "66": "4b4506a2_dcb4197c_0.html"
	, "53": "5b3f07ba_673f1568_0.html"
	, "69": "520606cc_fbb0462_0.html"
	, "67": "521606d4_559f0ad4_0.html"
	, "63": "520906cd_57e80aba_0.html"
	, "68": "521406d3_39050897_0.html"
	, "70": "4b4706a3_3aa408dd_0.html"
	, "71": "4b4306a1_3d27092f_0.html"
	, "73": "4b3d069e_559e0a51_0.html"
	, "75": "4b4106a0_59b90afb_0.html"
	, "52": "78dc0831_83742239_0.html"
	, "62": "706e07c6_6c310b53_0.html"
	, "74": "68ac0798_527e0a3a_0.html"
	, "72": "707e07ce_3ba108ee_0.html"};

var xBkmkIDs={};

$(document).ready(function(){

	var _urlTarget=function(sHref){
		var sUrl;
		var m=sHref.match(/^nyf:\/\/entry\?itemid=(\d+)/i);
		if(m && m.length>1){
			var sFn=xItemIDs[m[1]];
			if(sFn){
				sUrl=sFn;
			}else{
				alert('Cannot locate the target webpage. \n\n' + sHref);
			}
			if(!sUrl) sUrl='';
		}else{
			m=sHref.match(/^nyf:\/\/entry\?bmid=(\d+)/i);
			if(m && m.length>1){
				var sBmID=m[1];
				if(sBmID){
					var v=(xBkmkIDs[sBmID]||'').split('\t');
					if(v && v.length>2){
						var sItemID=parseInt(v[0]), sSsgName=v[1], sAnchor=v[2];
						var sFn=xItemIDs[sItemID];
						if(sFn){
							sUrl=sFn + '#' + sAnchor;
						}else{
							alert('Cannot locate the target webpage. \n\n' + sHref);
						}
					}
				}
				if(!sUrl) sUrl='';
			}
		}
		return sUrl;
	};

	var linkOf=function(p){
		var sUri='';
		while(p && !sUri){
			sUri=p.href||'';
			p=p.parentNode;
		}
		return sUri;
	};

	$('a').click(function(e){
		//2018.4.5 the target element could be a <SPAN> inside of <a>
		var sHref=linkOf(e.target);
		if(sHref){
			var sUrl=_urlTarget(sHref);
			if(sUrl){
				document.location.href=sUrl;
				return false;
			}else if(sUrl===''){
				return false; //2017.10.21 bad nyf:// links;
			}else{
				window.open(sHref);
				return false;
			}
		}else{
			return false;
		}
	});

});
