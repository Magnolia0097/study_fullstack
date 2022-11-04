import { Button, Container, TextField, Typography, Grid } from "@mui/material";
import React from "react";
import { signup } from "./service/ApiService";
import { Link } from "react-router-dom";

function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();

        // 오브젝트에서 form에 저장된 데이터를 맵의 형태로 바꿔줌
        const data = new FormData(event.target);
        const username = data.get("username");
        const password = data.get("password");
        signup({ username: username, password:password }).then(
            (response) => {
                // 계정 생성 성공 시 login 페이지로 리디렉트
                window.location.href = "/login";
            }
        );
    };

    return (
        <Container component="main" maxWidth="xs" style={{ marginTop:"8%"}}>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            계정 생성 페이지
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="username"
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="아이디"
                            autoFocus/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="아이디"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            계정 생성
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link to="/login" variant="body2">
                            이미 계정이 있슴까? 로그인 하심숑
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default SignUp;

