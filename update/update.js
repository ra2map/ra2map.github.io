$(function () {
//    var latestVersion = '2.0.0';
    var latestVersion = '1.139p1（2022.2.22）';
	var currentVersion = ver||'未知';

    var box = $(".update");
    box.empty();
    if (currentVersion != latestVersion) {
        box.append("<p style='color: #555;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的版本：" + currentVersion + "，最新版本：" + latestVersion + "，建议访问<a href='ra2map.github.io' target='_blank'>ra2map.github.io</a>浏览新版。</p><p>更新内容：1.xxxx；2.ffff；更多内容请至上述网站查看</p><br>");
    }
    else {
        box.append("<p style='color: #555;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的版本：" + currentVersion + "，已是最新版本，已成功联网检查更新！</p><br>");
    }
});
//百度统计
{
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?30d8663ed5998a101dba65d5b1bdab74";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
}
    /*
    <div class="update"><p>您的版本：V1.139p1（2022.2.22），更新程序出错，<a href="javascript:alert('无法检查更新，可能的原因有\n\n1.设备未联网\n2.您的网络无法连接至ra2map.github.io/update/update.js\n\n请访问ra2map.github.io，或前往教程发布页以检查更新。')">点击查看详情</a></p><br>
    </div>

	<script>var ver='1.139p1（2022.2.22）';</script>
	<script src="../new/jquery-3.6.0.min.js"></script>
	<script src="https://ra2map.github.io/update/update.js"></script>
    */
/*
	style="
    border-radius: 30px;
    border: 1px solid rgb(230, 230, 230);
    box-shadow: 2px 2px 30px #aaaaaa;
    margin: 30px auto;
    padding: 60px;
    max-width: 960px;"
*/
//2022-2-23 17:57:35