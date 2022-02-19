$(function () {
//    var latestVersion = '2.0.0';
    var latestVersion = 1.139;
    try {
        var currentVersion = ver;
    }
    catch (err) {
        var currentVersion = '未知';
    }
    finally {
    }

    var box = $(".update");
    box.empty();
    if (currentVersion != latestVersion) {
        box.append("<p style='color: #555;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的版本：" + currentVersion + "，最新版本：" + latestVersion + "，建议访问<a href='ra2map.github.io' target='_blank'>ra2map.github.io</a>浏览新版。</p><p>更新内容：555555；66666；更多内容请至上述网站查看");
    }
    else {
        box.append("<p style='color: #555;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的版本：" + currentVersion + "，已是最新版本，已成功联网检查更新！</p>");
    }
});
    /*
    <div class="update"><p>您的版本：V1.139，更新程序出错，<a href="javascript:alert('无法检查更新，可能的原因有\n\n1.外部JavaScript被禁用\n2.无法连接至ra2map.github.io/update/update.js\n\n请访问ra2map.github.io，或前往教程发布页以检查更新。')">点击查看详情</a></p>
    </div>

	<script>var ver=1.139;</script>
	<script src="../new/jquery-3.6.0.min.js"></script>
	<script src="../update/update.js"></script>
    */
