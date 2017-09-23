var con = new ActiveXObject("ADODB.Connection");
con.ConnectionString = "DRIVER={MySQL ODBC 5.3 ANSI Driver};OPTION=3;SERVER=localhost;User ID=root;Password=Yuanjia11;" +
    "Database=lesson;Port=3306";
con.open;
var rs = new ActiveXObject("ADODB.Recordset");
rs.open("select * from students", con);
while (!rs.eof) {
    var u = rs.Fields("name");
    document.write(u);
    rs.moveNext;
}
rs.close();
rs = null;
con.close();
con = null;