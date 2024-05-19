import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #f8f8f8;
            padding: 10px 20px;
            border-bottom: 1px solid #e7e7e7;
        }
        .navbar-title {
            font-size: 18px;
            font-weight: bold;
        }
        .search-input {
            height: 30px;
            padding: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .menu {
            display: none;
            flex-direction: column;
            background-color: #f8f8f8;
            position: absolute;
            top: 50px;
            left: 0;
            right: 0;
            border-top: 1px solid #e7e7e7;
            padding: 10px 20px;
        }
        .menu a {
            text-decoration: none;
            color: black;
            margin: 5px 0;
        }
        .hamburger {
            cursor: pointer;
        }
        @media (min-width: 600px) {
            .menu {
                display: flex;
                position: static;
                flex-direction: row;
            }
            .menu a {
                margin: 0 10px;
            }
            .hamburger {
                display: none;
            }
        }
    </style>
    <script>
        function toggleMenu() {
            var menu = document.querySelector('.menu');
            var hamburger = document.querySelector('.hamburger');
            if (menu.style.display === 'flex') {
                menu.style.display = 'none';
                hamburger.textContent = '☰';
            } else {
                menu.style.display = 'flex';
                hamburger.textContent = '✖';
            }
        }
    </script>
</head>
<body>
    <div class="navbar">
        <div class="navbar-title"><a href="/"></a></div>
        <input type="text" class="search-input" placeholder="Search...">
        <div class="hamburger" onclick="toggleMenu()">☰</div>
    </div>
    <div class="menu">
        <a href="/">AEON</a>
        <a href="/">Showcase</a>
        <a href="/">Docs</a>
        <a href="/">Blog</a>
        <a href="/">Analytics</a>
        <a href="/">Templates</a>
        <a href="/">Enterprise</a>
    </div>
</body>
</html>
`;

export default function WebNavBar() {
    const { width } = Dimensions.get('window');
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <RenderHTML contentWidth={width} source={{ html: htmlContent }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'write'
    },
});