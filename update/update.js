$(function () {
    if (typeof online == "undefined") {
        var latestVersion = '1.274（2022.7.12）';
        //1.139p2（2022.2.24）1.146（2022.3.28）1.173（2022.4.26）1.184（2022.5.15）V1.258（2022.7.11）<!--V1.201（2022.6.16）V1.199（2022.5.28）1.191（2022.5.21）-->
        var currentVersion = ver || '未知';

        var box = $(".update");
        box.empty();
        if (currentVersion != latestVersion) {
            box.append("<p style='color: #777;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的版本：" + currentVersion + "，最新版本：" + latestVersion + "，更新内容较多，建议您访问<a href='https://ra2map.github.io' target='_blank'>ra2map.github.io</a>浏览新版。</p><p>更新内容请至上述网站查看</p><br>");
        }
        else {
            box.append("<p style='color: #777;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的版本：" + currentVersion + "，已是最新版本，已成功联网检查更新！</p><br>");
        }
    }
});

/*
<div class="update"><p>您的版本：V1.139p1（2022.2.22），更新程序出错，<a href="javascript:alert('无法检查更新，可能的原因有\n\n1.设备未联网\n2.您的网络无法连接至ra2map.github.io/update/update.js\n\n请访问ra2map.github.io，或前往教程发布页以检查更新。')">点击查看详情</a></p><br>
</div>

<script>var ver='1.139p1（2022.2.22）';var online=1;</script>
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