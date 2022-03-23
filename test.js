<style>
    input[type="text"] {
        max-width: 100%;
    }
</style>
<script>
function demoMatchClick() {
  var re = new RegExp(document.demoMatch.regex.value);
  if (document.demoMatch.subject.value.match(re)) {
    alert("Успешно найдено");
  } else {
    alert("Не найдено");
  }
}
function demoShowMatchClick() {
  var re = new RegExp(document.demoMatch.regex.value);
  var m = re.exec(document.demoMatch.subject.value);
  if (m == null) {
    alert("Не найдено");
  } else {
    var s = "Найдено в позиции " + m.index + ":\n";
    for (i = 0; i < m.length; i++) {
      s = s + m[i] + "\n";
    }
    alert(s);
  }
}
function demoReplaceClick() {
  var re = new RegExp(document.demoMatch.regex.value, "g");
  document.demoMatch.result.value =
    document.demoMatch.subject.value.replace(re,
      document.demoMatch.replacement.value);
}
</script>
<form id="demoMatch" name="demoMatch" method="POST" action="javascript:void(0)">
    <p><label>Regexp: <br><input type="text" name="regex" placeholder="Например, \bt[a-z]+\b" size="80"></label></p>
    <p><label>Subject: <br><input type="text" name="subject" placeholder="Строка для RegExp проверки" size="80"></label></p>
    <p><input type="submit" value="Match" onclick="demoMatchClick()">
        <input type="submit" value="Exec" onclick="demoShowMatchClick()"></p>
    <p><label>На что заменять: <br><input type="text" name="replacement" placeholder="replaced" size="80"></label></p>
    <p><label>Результат: <br><input type="text" name="result" value="" size="80"></label></p>
    <p><input type="submit" value="Replace" onclick="demoReplaceClick()"></p>
</form>
