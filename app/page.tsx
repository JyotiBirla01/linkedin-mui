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
} from "@mui/icons-material";
import LinkedInLoader from "../components/LinkedInLoader";
import { useEffect, useState } from "react";

export default function LinkedInMuiClone() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LinkedInLoader />;
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar sx={{ maxWidth: 1128, mx: "auto", width: "100%", gap: 2 }}>
          <Typography variant="h6">LinkedIn</Typography>

          <TextField
            size="small"
            placeholder="Search"
            sx={{ width: 280 }}
            InputProps={{
              startAdornment: <Search fontSize="small" sx={{ mr: 1 }} />,
            }}
          />

          <Box sx={{ flexGrow: 1 }} />

          <IconButton><Home /></IconButton>
          <IconButton><People /></IconButton>
          <IconButton><Work /></IconButton>

          <IconButton>
            <Badge badgeContent={3} color="error">
              <Chat />
            </Badge>
          </IconButton>

          <IconButton><Notifications /></IconButton>

          <Avatar
            src="https://i.pravatar.cc/32?img=5"
            sx={{ width: 24, height: 24 }}
          />
        </Toolbar>
      </AppBar>

      <Toolbar />

      {/* MAIN CONTENT */}
      <Container disableGutters sx={{ maxWidth: 1128, mx: "auto", px: 2, mt: 3 }}>
        <Grid container spacing={3} wrap="nowrap">
          {/* LEFT SIDEBAR */}
        <Grid item sx={{ width: 225, flexShrink: 0 }}>
      <Stack spacing={2}>
    <Card>
      {/* Cover */}
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
        sx={{ height: 56, width: "100%", objectFit: "cover" }}
      />

      {/* Avatar */}
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
        {/* Name */}
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

          <Typography variant="body2" color="text.secondary" align="center">
            MERN Stack Developer at TechNova Solutions
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Indore, Madhya Pradesh
          </Typography>
          {/* Company */}
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

        {/* Stats */}
        <Stack spacing={1}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Profile viewers
            </Typography>
            <Typography variant="body2" fontWeight={600} color="primary">
              155
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Post impressions
            </Typography>
            <Typography variant="body2" fontWeight={600} color="primary">
              11
            </Typography>
          </Stack>
        </Stack>

        <Divider sx={{ my: 1 }} />

        {/* Premium */}
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

        {/* Links */}
        <Stack spacing={1}>
          {[
            { label: "Saved items", icon: "M3 3v11l5-3.3L13 14V3z" },
            { label: "Groups", icon: "M20 7h-4V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v1H4v2h16z" },
            { label: "Newsletters", icon: "M3 4h18v16H3z" },
            { label: "Events", icon: "M3 3h18v18H3z" },
          ].map((item) => (
            <Stack
              key={item.label}
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <Box component="svg" width={16} height={16} viewBox="0 0 24 24">
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


          {/* FEED */}
          {/* FEED */}
<Grid
  item
  sx={{
    flexGrow: 1,
    minWidth: 0,
    height: "calc(100vh - 112px)",
    overflowY: "auto",
    pr: 1,
  }}
>

<Stack spacing={2}>
  {/* CREATE POST */}
  <Card>
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src="https://i.pravatar.cc/48?img=5" />
        <Button
          fullWidth
          variant="outlined"
          sx={{
            justifyContent: "flex-start",
            borderRadius: 10,
            textTransform: "none",
            color: "text.secondary",
          }}
        >
          Start a post
        </Button>
      </Stack>
    </CardContent>

    <Divider />

    <CardActions sx={{ justifyContent: "space-around" }}>
      <Button startIcon={<Box sx={{ color: "green" }}>▶</Box>}>Video</Button>
      <Button startIcon={<Box sx={{ color: "dodgerblue" }}>🖼</Box>}>Photo</Button>
      <Button startIcon={<Box sx={{ color: "orange" }}>📝</Box>}>
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
      sx={{ borderRadius: 10, textTransform: "none" }}
    >
      New posts
    </Button>
  </Box>

  {/* POSTS */}
  {Array.from({ length: 12 }).map((_, post) => (
    <Card key={post}>
      <CardHeader
        avatar={<Avatar src={`https://i.pravatar.cc/48?img=${post + 20}`} />}
        title={
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography fontWeight={600}>Ran Laron</Typography>
            <Typography
              variant="body2"
              sx={{
                bgcolor: "#f3f2ef",
                px: 0.5,
                borderRadius: 0.5,
              }}
            >
              in
            </Typography>
          </Stack>
        }
        subheader="CTO & Co-Founder • 2h • 🌍"
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
      />

      <CardContent>
        <Typography variant="body2">
          We’re looking for a freelance front-end developer with a proven
          track record of shipping clean, modern, production-ready web apps.
          <Typography component="span" color="primary">
            …more
          </Typography>
        </Typography>
      </CardContent>

      {post % 2 === 0 && (
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800"
          sx={{ width: "100%", maxHeight: 420, objectFit: "cover" }}
        />
      )}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          👍 ❤️ 🎉  Sandeep Mewada and 26 others • 21 comments
        </Typography>
      </CardContent>

      <Divider />

      <CardActions sx={{ justifyContent: "space-around" }}>
        <Button startIcon={<ThumbUp />}>Like</Button>
        <Button startIcon={<Comment />}>Comment</Button>
        <Button startIcon={<Share />}>Repost</Button>
        <Button startIcon={<Send />}>Send</Button>
      </CardActions>
    </Card>
  ))}
</Stack>

          </Grid>

          {/* RIGHT SIDEBAR */}
          <Grid item sx={{ width: 300, flexShrink: 0 }}>
            <Stack spacing={2}>
              <Card>
                <CardContent>
                  <Typography fontWeight={600} gutterBottom>
                    LinkedIn News
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="Tech hiring slows down" secondary="1h ago" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="AI tools trend in 2026" secondary="3h ago" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Remote work policies evolve" secondary="5h ago" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography fontWeight={600}>Today’s puzzle</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Solve today’s brain teaser
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography fontWeight={600}>Ad • Promote your business</Typography>

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
        </Grid>
      </Container>
    </Box>
  );
}
