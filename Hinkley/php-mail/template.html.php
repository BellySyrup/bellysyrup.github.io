<?php
/**
 * Variables
 *
 * $name
 * $email
 * $message
 */

$message = '<html>
<body bgcolor="#d9d9d9" style="margin:0;padding:10px 0 40px 0;">
<table width="100%" border="0" style="border:none;">
    <tr align="center">
        <td width="610">
            <table width="610" border="0" style="border:none;">
                <tr>
                    <td bgcolor="#ffffff">
                        <h1 style="font-family:Arial;font-size:18px;line-height:18px; padding: 30px 30px 0 30px;">
                            Contact request by '. $name .'
                        </h1>
                        <p style="font-family:Arial;font-size:13px;line-height:18px; padding: 30px;">
                            E-Mail: '. $email . '<br />
                            Message:<br />'. nl2br( $message ) .'
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>';

return( $message );
