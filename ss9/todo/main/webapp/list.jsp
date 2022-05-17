<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: LENOVO
  Date: 3/11/2022
  Time: 09:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
<h2>Danh sách học sinh</h2>
<button><a href="/students?action=create">Create Student</a></button>
<table border="1" id="example" class="table table-striped table-bordered">
    <thead>
    <tr>
        <th>STT</th>
        <th>Mã học sinh</th>
        <th>Tên học sinh</th>
        <th>Ngày sinh</th>
        <th>Giới tính</th>
        <th>Điểm</th>
        <th>Danh hiệu</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach var="student" items="${students}" varStatus="loop">
        <tr>
            <td>${loop.count}</td>
            <td><c:out value="${student.id}"></c:out></td>
            <td><c:out value="${student.name}"></c:out></td>
            <td><c:out value="${student.dateOfBirth}"></c:out></td>
                <%--            <td><c:out value="${student.gender}"></c:out></td>--%>
            <td>
                <c:if test="${student.gender == 1}">
                    Male
                </c:if>
                <c:if test="${student.gender == 0}">
                    Female
                </c:if>
            </td>
            <td><c:out value="${student.grade}"></c:out></td>
            <td>
                <c:choose>
                    <c:when test="${student.grade <7}">Trung bình</c:when>
                    <c:when test="${student.grade <9}">Khá</c:when>
                    <c:when test="${student.grade <=10}">Giỏi</c:when>
                    <c:otherwise>Không xác định</c:otherwise>
                </c:choose>
            </td>
        </tr>
    </c:forEach>
    </tbody>
</table>

<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap4.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
<script>
    $(document).ready(function () {
        $('#example').DataTable();
    });
</script>
</body>
</html>
