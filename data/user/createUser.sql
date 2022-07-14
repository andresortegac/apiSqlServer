INSERT INTO [dbo].[Table_user]
(
    [name_user],
    [password_user]
)

VALUES 
(    
    @name_user,
    @password_user
) 
    
SELECT SCOPE_IDENTITY() AS id_user