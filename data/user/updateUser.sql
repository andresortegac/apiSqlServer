UPDATE [dbo].[Table_user]

SET [name_user]=@name_user,
    [password_user]=@password_user

WHERE [id_user]=@id_user

SELECT 
    [id_user],
    [name_user],
    [password_user]

FROM[dbo].[Table_user]

WHERE [id_user]=@id_user