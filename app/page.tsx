"use client";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Button,
  TextField,
  Badge,
  Divider,
  List,
  ListItem,
  ListItemText,
  Container,
  Stack,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  Home,
  People,
  Work,
  Chat,
  Notifications,
  ThumbUp,
  Comment,
  Share,
  Send,
  Search,
  MoreVert,
  Menu as MenuIcon,
} from "@mui/icons-material";
import LinkedInLoader from "../components/LinkedInLoader";
import { useEffect, useState } from "react";

export default function LinkedInMuiClone() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg")); // 600px - 1200px

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LinkedInLoader />;

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <AppBar position="fixed" color="default" elevation={0} sx={{ bgcolor: "white", borderBottom: "1px solid #e0e0e0" }}>
        <Toolbar
          sx={{
            maxWidth: 1128,
            mx: "auto",
            width: "100%",
            gap: { xs: 1, sm: 2 },
            px: { xs: 1, sm: 2 },
            minHeight: { xs: 56, sm: 64 },
          }}
        >
          {isMobile && (
            <IconButton
              edge="start"
              onClick={() => setMobileMenuOpen(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* LinkedIn Logo */}
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
              width: 34,
              height: 34,
              mr: 1,
              objectFit: "contain",
            }}
          />

          {/* Search Bar */}
          <TextField
            size="small"
            placeholder="Search"
            sx={{
              width: { xs: 120, sm: 200, md: 280 },
              display: { xs: "none", sm: "block" },
              "& .MuiOutlinedInput-root": {
                bgcolor: "#eef3f8",
                borderRadius: 1,
                "& fieldset": {
                  border: "none",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <Search fontSize="small" sx={{ mr: 1, color: "#666" }} />
              ),
            }}
          />

          {isMobile && (
            <IconButton>
              <Search />
            </IconButton>
          )}

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          {!isMobile && (
            <Stack direction="row" spacing={0}>
              <Button
                sx={{
                  flexDirection: "column",
                  minWidth: 80,
                  textTransform: "none",
                  color: "#666",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "#000",
                  },
                }}
              >
                <Home sx={{ fontSize: 24 }} />
                <Typography variant="caption" sx={{ fontSize: 12, mt: 0.5 }}>
                  Home
                </Typography>
              </Button>

              <Button
                sx={{
                  flexDirection: "column",
                  minWidth: 80,
                  textTransform: "none",
                  color: "#666",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "#000",
                  },
                }}
              >
                <People sx={{ fontSize: 24 }} />
                <Typography variant="caption" sx={{ fontSize: 12, mt: 0.5 }}>
                  My Network
                </Typography>
              </Button>

              <Button
                sx={{
                  flexDirection: "column",
                  minWidth: 80,
                  textTransform: "none",
                  color: "#666",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "#000",
                  },
                }}
              >
                <Work sx={{ fontSize: 24 }} />
                <Typography variant="caption" sx={{ fontSize: 12, mt: 0.5 }}>
                  Jobs
                </Typography>
              </Button>

              <Button
                sx={{
                  flexDirection: "column",
                  minWidth: 80,
                  textTransform: "none",
                  color: "#666",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "#000",
                  },
                }}
              >
                <Badge badgeContent={2} color="error" sx={{ "& .MuiBadge-badge": { fontSize: 10, height: 16, minWidth: 16 } }}>
                  <Chat sx={{ fontSize: 24 }} />
                </Badge>
                <Typography variant="caption" sx={{ fontSize: 12, mt: 0.5 }}>
                  Messaging
                </Typography>
              </Button>

              <Button
                sx={{
                  flexDirection: "column",
                  minWidth: 80,
                  textTransform: "none",
                  color: "#666",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "#000",
                  },
                }}
              >
                <Notifications sx={{ fontSize: 24 }} />
                <Typography variant="caption" sx={{ fontSize: 12, mt: 0.5 }}>
                  Notifications
                </Typography>
              </Button>

              <Button
                sx={{
                  flexDirection: "column",
                  minWidth: 60,
                  textTransform: "none",
                  color: "#666",
                  borderRight: "1px solid #e0e0e0",
                  pr: 2,
                  mr: 1,
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "#000",
                  },
                }}
              >
                <Avatar
                  src="https://i.pravatar.cc/32?img=5"
                  sx={{ width: 24, height: 24 }}
                />
                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 0.5 }}>
                  <Typography variant="caption" sx={{ fontSize: 12 }}>
                    Me
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: 10 }}>
                    ▾
                  </Typography>
                </Stack>
              </Button>

              <Button
                sx={{
                  flexDirection: "column",
                  minWidth: 60,
                  textTransform: "none",
                  color: "#666",
                  "&:hover": {
                    bgcolor: "transparent",
                    color: "#000",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 3h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zM3 10h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zM3 17h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4z"
                      fill="currentColor"
                    />
                  </Box>
                </Box>
                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 0.5 }}>
                  <Typography variant="caption" sx={{ fontSize: 12 }}>
                    Work
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: 10 }}>
                    ▾
                  </Typography>
                </Stack>
              </Button>
            </Stack>
          )}

          {/* Mobile Icons */}
          {isMobile && (
            <>
              <IconButton>
                <Badge badgeContent={3} color="error">
                  <Chat />
                </Badge>
              </IconButton>

              <IconButton>
                <Notifications />
              </IconButton>

              <Avatar
                src="https://i.pravatar.cc/32?img=5"
                sx={{ width: 24, height: 24 }}
              />
            </>
          )}
        </Toolbar>
      </AppBar>

      <Toolbar />

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box sx={{ width: 280, p: 2 }}>
          <Stack spacing={2}>
            <Avatar
              src="https://i.pravatar.cc/150?img=5"
              sx={{ width: 72, height: 72, mx: "auto" }}
            />
            <Typography align="center" fontWeight={600}>
              Jyoti Birla
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              MERN Stack Developer at TechNova Solutions
            </Typography>
            <Divider />
            <Button startIcon={<Home />} fullWidth sx={{ justifyContent: "flex-start" }}>
              Home
            </Button>
            <Button startIcon={<People />} fullWidth sx={{ justifyContent: "flex-start" }}>
              My Network
            </Button>
            <Button startIcon={<Work />} fullWidth sx={{ justifyContent: "flex-start" }}>
              Jobs
            </Button>
          </Stack>
        </Box>
      </Drawer>

      {/* MAIN CONTENT */}
      <Container
        disableGutters
        sx={{
          maxWidth: 1128,
          mx: "auto",
          px: { xs: 1, sm: 2 },
          mt: { xs: 2, sm: 3 },
        }}
      >
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} wrap={isMobile ? "wrap" : "nowrap"}>
          {/* LEFT SIDEBAR - Hidden on mobile */}
          {!isMobile && (
            <Grid sx={{ width: { md: 225 }, flexShrink: 0 }}>
              <Stack spacing={2} sx={{ position: { md: "sticky" }, top: 80 }}>
                <Card>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
                    sx={{ height: 56, width: "100%", objectFit: "cover" }}
                  />

                  <Avatar
                    src="https://i.pravatar.cc/150?img=5"
                    sx={{
                      width: 72,
                      height: 72,
                      mx: "auto",
                      mt: -4,
                      border: "2px solid white",
                    }}
                  />

                  <CardContent sx={{ pt: 1 }}>
                    <Stack alignItems="center" spacing={0.5}>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography fontWeight={600}>Jyoti Birla</Typography>
                        <Box
                          component="span"
                          sx={{
                            width: 16,
                            height: 16,
                            bgcolor: "primary.main",
                            color: "#fff",
                            borderRadius: "50%",
                            fontSize: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          ✓
                        </Box>
                      </Stack>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                      >
                        MERN Stack Developer at TechNova Solutions
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        Indore, Madhya Pradesh
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ mt: 0.5 }}
                      >
                        <Box
                          component="img"
                          src="https://media.licdn.com/dms/image/v2/C4E0BAQFfKJaDYAqbkg/company-logo_100_100/company-logo_100_100/0/1644469905471?e=1771459200&v=beta&t=Ouvm0KPU7ZSPhmXUByB1H8X5ko1v3hx-Oq0Qa6avDQ0"
                          alt="Company"
                          sx={{
                            width: 20,
                            height: 20,
                            borderRadius: 0.5,
                          }}
                        />
                        <Typography variant="body2">
                          TechNova Solutions Private Limited
                        </Typography>
                      </Stack>
                    </Stack>

                    <Divider sx={{ my: 1 }} />

                    <Stack spacing={1}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="text.secondary">
                          Profile viewers
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight={600}
                          color="primary"
                        >
                          155
                        </Typography>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" color="text.secondary">
                          Post impressions
                        </Typography>
                        <Typography
                          variant="body2"
                          fontWeight={600}
                          color="primary"
                        >
                          11
                        </Typography>
                      </Stack>
                    </Stack>

                    <Divider sx={{ my: 1 }} />

                    <Typography variant="body2" color="text.secondary">
                      Unlock exclusive tools & insights
                    </Typography>

                    <Button
                      size="small"
                      startIcon={
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            bgcolor: "#e7a33e",
                            borderRadius: 0.5,
                          }}
                        />
                      }
                      sx={{ px: 0, textTransform: "none" }}
                    >
                      Try Premium for ₹0
                    </Button>

                    <Divider sx={{ my: 1 }} />

                    <Stack spacing={1}>
                      {[
                        { label: "Saved items", icon: "M3 3v11l5-3.3L13 14V3z" },
                        {
                          label: "Groups",
                          icon: "M20 7h-4V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v1H4v2h16z",
                        },
                        { label: "Newsletters", icon: "M3 4h18v16H3z" },
                        { label: "Events", icon: "M3 3h18v18H3z" },
                      ].map((item) => (
                        <Stack
                          key={item.label}
                          direction="row"
                          spacing={1}
                          alignItems="center"
                        >
                          <Box
                            component="svg"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                          >
                            <path d={item.icon} fill="currentColor" />
                          </Box>
                          <Typography variant="body2" fontWeight={500}>
                            {item.label}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          )}

          {/* FEED */}
          <Grid
            sx={{
              flexGrow: isMobile ? 1 : 0,
              width: isMobile ? "100%" : "auto",
              minWidth: 0,
              height: { xs: "auto", md: "calc(100vh - 112px)" },
              overflowY: { xs: "visible", md: "auto" },
              pr: { md: 1 },
            }}
          >
            <Stack spacing={{ xs: 1, sm: 2 }}>
              {/* CREATE POST */}
              <Card>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      src="https://i.pravatar.cc/48?img=5"
                      sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}
                    />
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        justifyContent: "flex-start",
                        borderRadius: 10,
                        textTransform: "none",
                        color: "text.secondary",
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                      }}
                    >
                      Start a post
                    </Button>
                  </Stack>
                </CardContent>

                <Divider />

                <CardActions
                  sx={{
                    justifyContent: "space-around",
                    flexWrap: { xs: "wrap", sm: "nowrap" },
                    gap: { xs: 0.5, sm: 0 },
                    py: 1,
                  }}
                >
                  <Button
                    startIcon={
                      <Box
                        component="svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        sx={{ color: "#378fe9" }}
                      >
                        <path
                          fill="currentColor"
                          d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-1 11l-4-3v3H6V9h8v3l4-3v6z"
                        />
                      </Box>
                    }
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      color: "#666",
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "#f3f2ef" },
                    }}
                  >
                    Media
                  </Button>
                  <Button
                    startIcon={
                      <Box
                        component="svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        sx={{ color: "#c37d16" }}
                      >
                        <path
                          fill="currentColor"
                          d="M3 3v15h15V3H3zm11 13H5V5h9v11zm4-9v11H7v2h13V7h-2z"
                        />
                      </Box>
                    }
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      color: "#666",
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "#f3f2ef" },
                    }}
                  >
                    Event
                  </Button>
                  <Button
                    startIcon={
                      <Box
                        component="svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        sx={{ color: "#e16745" }}
                      >
                        <path
                          fill="currentColor"
                          d="M21 3H3v2h18V3zm-3 4H6v2h12V7zm-4 4H9v2h5v-2zm-3 4h-2v2h2v-2z"
                        />
                      </Box>
                    }
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      color: "#666",
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": { bgcolor: "#f3f2ef" },
                    }}
                  >
                    Write article
                  </Button>
                </CardActions>
              </Card>

              {/* SORT BAR */}
              <Stack direction="row" alignItems="center" spacing={1}>
                <Divider sx={{ flexGrow: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Sort by: <strong>Top</strong>
                </Typography>
              </Stack>

              {/* NEW POSTS BUTTON */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  startIcon={<Typography>↑</Typography>}
                  sx={{
                    borderRadius: 10,
                    textTransform: "none",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                >
                  New posts
                </Button>
              </Box>

              {/* POSTS */}
              {Array.from({ length: 12 }).map((_, post) => (
                <Card key={post}>
                  <CardHeader
                    avatar={
                      <Avatar
                        src={`https://i.pravatar.cc/48?img=${post + 20}`}
                        sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}
                      />
                    }
                    title={
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography
                          fontWeight={600}
                          sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                        >
                          Ran Laron
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            bgcolor: "#f3f2ef",
                            px: 0.5,
                            borderRadius: 0.5,
                            fontSize: { xs: "0.75rem", sm: "0.875rem" },
                          }}
                        >
                          in
                        </Typography>
                      </Stack>
                    }
                    subheader={
                      <Typography
                        variant="body2"
                        sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
                      >
                        CTO & Co-Founder • 2h • 🌍
                      </Typography>
                    }
                    action={
                      <IconButton size="small">
                        <MoreVert />
                      </IconButton>
                    }
                  />

                  <CardContent sx={{ pt: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: { xs: "0.875rem", sm: "0.875rem" } }}
                    >
                      We're looking for a freelance front-end developer with a
                      proven track record of shipping clean, modern,
                      production-ready web apps.
                      <Typography component="span" color="primary">
                        …more
                      </Typography>
                    </Typography>
                  </CardContent>

                  {post % 2 === 0 && (
                    <Box
                      component="img"
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800"
                      sx={{
                        width: "100%",
                        maxHeight: { xs: 300, sm: 420 },
                        objectFit: "cover",
                      }}
                    />
                  )}

                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
                    >
                      👍 ❤️ 🎉 Sandeep Mewada and 26 others • 21 comments
                    </Typography>
                  </CardContent>

                  <Divider />

                  <CardActions
                    sx={{
                      justifyContent: "space-around",
                      py: 0.5,
                    }}
                  >
                    <Button
                      startIcon={
                        <Box
                          component="svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"
                          />
                        </Box>
                      }
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        color: "#666",
                        textTransform: "none",
                        fontWeight: 600,
                        px: 2,
                        "&:hover": { bgcolor: "#f3f2ef" },
                      }}
                    >
                      Like
                    </Button>
                    <Button
                      startIcon={
                        <Box
                          component="svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28l4-2.84A4.92 4.92 0 0021 11z"
                          />
                        </Box>
                      }
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        color: "#666",
                        textTransform: "none",
                        fontWeight: 600,
                        px: 2,
                        "&:hover": { bgcolor: "#f3f2ef" },
                      }}
                    >
                      Comment
                    </Button>
                    <Button
                      startIcon={
                        <Box
                          component="svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          sx={{ display: { xs: "none", sm: "block" } }}
                        >
                          <path
                            fill="currentColor"
                            d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"
                          />
                        </Box>
                      }
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        color: "#666",
                        textTransform: "none",
                        fontWeight: 600,
                        px: 2,
                        display: { xs: "none", sm: "inline-flex" },
                        "&:hover": { bgcolor: "#f3f2ef" },
                      }}
                    >
                      Repost
                    </Button>
                    <Button
                      startIcon={
                        <Box
                          component="svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"
                          />
                        </Box>
                      }
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        color: "#666",
                        textTransform: "none",
                        fontWeight: 600,
                        px: 2,
                        "&:hover": { bgcolor: "#f3f2ef" },
                      }}
                    >
                      Send
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* RIGHT SIDEBAR - Hidden on mobile and tablet */}
          {!isMobile && !isTablet && (
            <Grid sx={{ width: 300, flexShrink: 0 }}>
              <Stack spacing={2} sx={{ position: { md: "sticky" }, top: 80 }}>
                <Card>
                  <CardContent>
                    <Typography fontWeight={600} gutterBottom>
                      LinkedIn News
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="Tech hiring slows down"
                          secondary="1h ago"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="AI tools trend in 2026"
                          secondary="3h ago"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Remote work policies evolve"
                          secondary="5h ago"
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography fontWeight={600}>Today's puzzle</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Solve today's brain teaser
                    </Typography>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography fontWeight={600}>
                      Ad • Promote your business
                    </Typography>

                    <Box
                      component="img"
                      src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"
                      alt="Promoted Ad"
                      sx={{
                        width: "100%",
                        borderRadius: 1,
                        mt: 1,
                        objectFit: "cover",
                      }}
                    />

                    <Typography variant="body2" color="text.secondary" mt={1}>
                      Reach millions of professionals
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          )}
        </Grid>
      </Container>

      {/* BOTTOM NAVIGATION FOR MOBILE */}
      {isMobile && (
        <AppBar
          position="fixed"
          color="default"
          sx={{ top: "auto", bottom: 0 }}
          elevation={3}
        >
          <Toolbar sx={{ justifyContent: "space-around", minHeight: 56 }}>
            <IconButton>
              <Home />
            </IconButton>
            <IconButton>
              <People />
            </IconButton>
            <IconButton>
              <Work />
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="error">
                <Chat />
              </Badge>
            </IconButton>
            <IconButton>
              <Notifications />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Add padding at bottom for mobile bottom nav */}
      {isMobile && <Box sx={{ height: 56 }} />}
    </Box>
  );
}
