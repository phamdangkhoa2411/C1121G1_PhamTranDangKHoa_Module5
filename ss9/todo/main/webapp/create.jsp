<%--
  Created by IntelliJ IDEA.
  User: LENOVO
  Date: 3/14/2022
  Time: 09:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <style>
        .error {
            color: red;
        }
    </style>
</head>
<body>
<form method="post">
    <label>ID</label>
    <input name="id"><br>
    <p class="error">${errors.get("id")}</p>
    <label>Name</label>
    <input name="name"><br>
    <p class="error">${errors.get("name")}</p>
    <label>Date Of Birth</label>
    <input name="dateOfBirth"><br>
    <label>Gender</label>
    <input name="gender"><br>
    <label>Grade</label>
    <input name="grade"><br>
    <button type="submit">Create</button>
</form>
</body>
</html>
