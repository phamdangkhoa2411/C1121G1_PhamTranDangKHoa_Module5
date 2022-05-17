<%--
  Created by IntelliJ IDEA.
  User: LENOVO
  Date: 10/8/2021
  Time: 18:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form method="post">
    <p>Name: </p>
    <input type="text" name="name" value="${student.name}">
    <p>Date of birth: </p>
    <input type="text" name="dateOfBirth" value="${student.dateOfBirth}">
    <button type="submit">Cập nhật</button>
</form>
</body>
</html>
