<!--执行.jsp不需要WEB-INF(安装引用类)-->
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <meta charset="UTF-8">
    <h1>Welcome to My Website!</h1>
    
    <%-- 在这里可以插入Java代码 --%>
    
    <%
        // 在这里可以插入更多的Java代码
        String message = "Hello, World!";
        out.println("<p>" + message + "</p>");
    %>
    
    <%-- 在这里可以插入更多的HTML代码 --%>
    
</body>
</html>
