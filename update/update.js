if (typeof online == "undefined") {
    $(function () {
        var latestVersion = '1.146（2022.3.28）';//1.139p2（2022.2.24）
        var currentVersion = ver || '未知';

        var box = $(".update");
        box.empty();
        if (currentVersion != latestVersion) {
            box.append("<p style='color: #777;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的版本：" + currentVersion + "，最新版本：" + latestVersion + "，更新内容较少，您可以访问<a href='https://ra2map.github.io' target='_blank'>ra2map.github.io</a>浏览新版，也可以继续浏览本地版。</p><p>更新内容：独立出2篇Heli教程，更新目录树等。更多内容请至上述网站查看</p><br>");
        }
        else {
            box.append("<p style='color: #777;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的版本：" + currentVersion + "，已是最新版本，已成功联网检查更新！</p><br>");
        }
    });
}
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